import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { getTeamsSquad } from "../../actions/actions";

import "./Squads.css";

function Squads(props) {
  const routeParams = useParams();

  useEffect(() => {
    props.getTeamsSquad(routeParams.teamId);
  }, []);

  return props.activeTeam ? (
    <div className="squad">
      <h1>{props.activeTeam.TeamName}</h1>
      <h5>Current Squad</h5>
      <div className="container">
        {props.squad.map((player) => {
          return (
            <div key={player.PlayerId} className="squad-item">
              <img src={player.PhotoUrl}></img>
              <div className="info">
                <h5>{player.CommonName}</h5>
                <p>Age: {moment().diff(player.BirthDate, "years", false)}</p>
                <p>Nationality: {player.Nationality}</p>
                <p>Position: {player.Position}</p>
                <p>Primary Foot: {player.Foot}</p>
              </div>
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
  getTeamsSquad,
  // return {
  //   setActiveSquad: (activeSquad) => {
  //     dispatch({ type: "SET_ACTIVE_SQUAD", activeSquad: activeSquad });
  //   },
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(Squads);
