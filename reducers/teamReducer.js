const initialState = {
    teams: [],
    loading: false,
    error: null,
  };
  
  const teamReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TEAMS_SUCCESS':
        return {
          ...state,
          teams: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_TEAMS_FAILURE':
        return {
          ...state,
          teams: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default teamReducer;
  