import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './reducers/matchesReducer';

const store = configureStore({
  reducer: {
    matches: matchesReducer,
  },
});

export default store;
