import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Competitions from "./pages/competitions/Competitions";
import CompetitionsDetail from "./pages/competitions-detail/Competitions-Detail";
import Teams from "./pages/teams/Teams";
import Squads from "./pages/squads/Squads";
import Header from "./shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="*" element={<Navigate to="/competitions" />}></Route>
        <Route exact path="/competitions" element={<Competitions />}></Route>
        <Route
          exact
          path="/competitions/:compId"
          element={<CompetitionsDetail />}
        ></Route>
        <Route
          exact
          path="/competitions/:compId/:seasonId"
          element={<Teams />}
        ></Route>
        <Route
          exact
          path="/competitions/:compId/:seasonId/:teamId"
          element={<Squads />}
        ></Route>
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStateCompetitions: (comps) => {
      dispatch({ type: "GET_COMPS", competitions: comps });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
