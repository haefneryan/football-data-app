import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setActiveSeason } from "../../actions/actions";

function CompetitionsDetail(props) {
  const navigate = useNavigate();

  const selectSeason = (season) => {
    props.setActiveSeason(season);
    navigate(
      `/competitions/${props.activeComp.CompetitionId}/${season.SeasonId}`
    );
  };

  return props.activeComp ? (
    <div className="squad">
      <h1>{props.activeComp.Name}</h1>
      <div>
        {props.seasons.map((season) => {
          return (
            <div
              key={season.SeasonId}
              onClick={() => selectSeason(season)}
              className="item"
            >
              <h4>{season.Name}</h4>
            </div>
          );
        })}
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
  setActiveSeason,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsDetail);
