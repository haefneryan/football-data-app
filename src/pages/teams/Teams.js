import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getActiveSeasonTeams, setActiveTeam } from "../../actions/actions";

import "./Teams.css";

function Teams(props) {
  const navigate = useNavigate();
  const routeParams = useParams();

  useEffect(() => {
    props.getActiveSeasonTeams(routeParams.seasonId);
  }, []);

  const selectTeam = (team) => {
    props.setActiveTeam(team);
    navigate(
      `/competitions/${props.activeComp.CompetitionId}/${props.activeSeason.SeasonId}/${team.TeamId}`
    );
  };

  return props.activeSeason ? (
    <div className="squad">
      <h1>{props.activeSeason.CompetitionName}</h1>
      <div className="teams-container">
        {props.seasonTeams.length > 0 ? (
          props.seasonTeams.map((team) => {
            return (
              <div
                key={team.TeamId}
                onClick={() => selectTeam(team)}
                className="item"
              >
                <img
                  src={team.Team.WikipediaLogoUrl}
                  className="club-crest"
                ></img>
                <h5>{team.TeamName}</h5>
              </div>
            );
          })
        ) : (
          <h4>Competition Teams have not yet been selected</h4>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  getActiveSeasonTeams,
  setActiveTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
