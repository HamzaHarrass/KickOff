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
    toggleFavorite(state, action) {
      const matchIndex = state.matches.findIndex(match => match.id === action.payload.id);
      if (matchIndex !== -1) {
        state.matches[matchIndex].isFavorite = !state.matches[matchIndex].isFavorite;
      }
    },
  },
});

export const { setMatches, setSelectedLeague, toggleFavorite } = matchesSlice.actions;

export default matchesSlice.reducer;