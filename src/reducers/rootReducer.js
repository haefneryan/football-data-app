const initState = {
  breadcrumb: ["Home"],
  competitions: [],
  teams: [],
  activeComp: null,
  seasons: [],
  activeSeason: null,
  seasonTeams: [],
  activeTeam: null,
  squad: [],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "FETCH_COMPS_DATA_SUCCESS") {
    return {
      ...state,
      competitions: action.payload.data,
    };
  } else if (action.type === "SET_ACTIVE_COMP") {
    return {
      ...state,
      activeComp: state.competitions.filter((comp) => {
        return comp.CompetitionId === action.payload;
      })[0],
      seasons: state.competitions
        .filter((comp) => {
          return comp.CompetitionId === action.payload;
        })[0]
        .Seasons.sort((a, b) => b.Name.localeCompare(a.Name)),
      breadcrumb: [
        ...state.breadcrumb,
        state.competitions.filter((comp) => {
          return comp.CompetitionId === action.payload;
        })[0].Name,
      ],
    };
  } else if (action.type === "SET_ACTIVE_SEASON") {
    return {
      ...state,
      activeSeason: action.payload,
      breadcrumb: [...state.breadcrumb, action.payload.Name],
    };
  } else if (action.type === "SET_ACTIVE_SEASON_TEAMS") {
    return {
      ...state,
      seasonTeams: action.payload,
    };
  } else if (action.type === "SET_ACTIVE_TEAM") {
    return {
      ...state,
      activeTeam: action.payload,
      breadcrumb: [...state.breadcrumb, action.payload.TeamName],
    };
  } else if (action.type === "SET_ACTIVE_SQUAD") {
    return {
      ...state,
      squad: action.payload,
    };
  } else if (action.type === "SET_BREADCRUMB") {
    return {
      ...state,
      breadcrumb: [...state.breadcrumb, action.payload],
    };
  } else if (action.type === "REMOVE_FROM_BREADCRUMB") {
    return {
      ...state,
      breadcrumb: state.breadcrumb.slice(0, action.payload),
    };
  } else if (action.type === "RESET_BREADCRUMB") {
    return {
      ...state,
      breadcrumb: ["Home"],
    };
  } else {
    return state;
  }
};

export default rootReducer;
