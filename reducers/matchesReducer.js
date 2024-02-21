import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  matches: [],
  selectedLeague: null,
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatches(state, action) {
      state.matches = action.payload;
    },
    setSelectedLeague(state, action) {
      state.selectedLeague = action.payload;
    },
  },
});

export const { setMatches, setSelectedLeague } = matchesSlice.actions;

export default matchesSlice.reducer;
