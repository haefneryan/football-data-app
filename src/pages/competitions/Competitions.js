import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setActiveCompetition } from "../../actions/actions";

function Competitions(props) {
  const [competitionId, setCompetitionId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/competitions/${competitionId}`);
  }, [competitionId]);

  const selectComp = (compId) => {
    setCompetitionId(compId);
    props.setActiveCompetition(compId);
  };

  return (
    <div className="squad">
      <h1>Competitions</h1>
      {props.competitions.map((competition) => {
        return (
          <div
            key={competition.CompetitionId}
            onClick={() => selectComp(competition.CompetitionId)}
            className="item"
          >
            <h5>{competition.Name}</h5>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  setActiveCompetition,
};

export default connect(mapStateToProps, mapDispatchToProps)(Competitions);
