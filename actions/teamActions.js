export const fetchTeams = () => {
    return (dispatch) => {
      fetch('https://api.sportmonks.com/v3/football/teams?include=players')
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'FETCH_TEAMS_SUCCESS',
            payload: data.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: 'FETCH_TEAMS_FAILURE',
            payload: error,
          });
        });
    };
  };