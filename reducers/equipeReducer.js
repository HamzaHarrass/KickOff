import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [],
  loading: false,
  error: null,
};

const equipeSlice = createSlice({
  name: 'equipe',
  initialState,
  reducers: {
    fetchTeamsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTeamsSuccess: (state, action) => {
      state.loading = false;
      state.teams = action.payload;
      state.error = null;
    },
    fetchTeamsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTeamsRequest, fetchTeamsSuccess, fetchTeamsFailure } = equipeSlice.actions;

export default equipeSlice.reducer;
