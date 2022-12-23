import axios from "axios";

const getCompsDataSuccess = (data) => ({
  type: "FETCH_COMPS_DATA_SUCCESS",
  payload: { data },
});

export const getCompsData = () => {
  return async (dispatch) => {
    let res = await axios.get(
      `${process.env.REACT_APP_COMPETITIONS_URL}?key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(getCompsDataSuccess(res.data));
  };
};

const setActiveCompetitionSuccess = (data) => ({
  type: "SET_ACTIVE_COMP",
  payload: data,
});

export const setActiveCompetition = (compId) => {
  return (dispatch) => {
    dispatch(setActiveCompetitionSuccess(compId));
  };
};

const setActiveSeasonSuccess = (data) => ({
  type: "SET_ACTIVE_SEASON",
  payload: data,
});

export const setActiveSeason = (season) => {
  return (dispatch) => {
    dispatch(setActiveSeasonSuccess(season));
  };
};

const getActiveSeasonTeamsSuccess = (data) => ({
  type: "SET_ACTIVE_SEASON_TEAMS",
  payload: data,
});

export const getActiveSeasonTeams = (seasonId) => {
  return async (dispatch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_SEASON_TEAMS_URL}/${seasonId}?key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(getActiveSeasonTeamsSuccess(response.data));
  };
};

const setActiveTeamSuccess = (data) => ({
  type: "SET_ACTIVE_TEAM",
  payload: data,
});

export const setActiveTeam = (teamId) => {
  return (dispatch) => {
    dispatch(setActiveTeamSuccess(teamId));
  };
};

const getTeamsSquadSuccess = (data) => ({
  type: "SET_ACTIVE_SQUAD",
  payload: data,
});

export const getTeamsSquad = (teamId) => {
  return async (dispatch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_SQUADS_URL}/${teamId}?key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(getTeamsSquadSuccess(response.data));
  };
};

const setBreadcrumbSuccess = (data) => ({
  type: "SET_BREADCRUMB",
  payload: data,
});

export const setBreadcrumb = (page) => {
  return (dispatch) => {
    dispatch(setBreadcrumbSuccess(page));
  };
};

const removefromBreadcrumbSuccess = (data) => ({
  type: "REMOVE_FROM_BREADCRUMB",
  payload: data,
});

export const removeFromBreadCrumb = (number) => {
  return (dispatch) => {
    dispatch(removefromBreadcrumbSuccess(number));
  };
};

const resetBreadcrumbSuccess = () => ({
  type: "RESET_BREADCRUMB",
});

export const resetBreadcrumb = () => {
  return (dispatch) => {
    dispatch(resetBreadcrumbSuccess());
  };
};
