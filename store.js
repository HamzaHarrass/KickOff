import { configureStore } from '@reduxjs/toolkit';
import teamReducer from './reducers/teamReducer';
import matchesReducer from './reducers/matchesReducer';

const store = configureStore({
  reducer: {
    matches: matchesReducer,
    teams: teamReducer,
  },
});

export default store;
