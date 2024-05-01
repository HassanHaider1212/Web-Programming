import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamName: '',
  totalGamesPlayed: '',
  score: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTeamName: (state, action) => {
      state.teamName = action.payload;
    },
    setTotalGamesPlayed: (state, action) => {
      state.totalGamesPlayed = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const {setTeamName, setTotalGamesPlayed, setScore, resetForm } = formSlice.actions;

export default configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});
