import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './reducers/matchesReducer';
import equipeReducer from './reducers/equipeReducer';

const store = configureStore({
  reducer: {
    matches: matchesReducer,
    equipe : equipeReducer,
  },
});

export default store;
