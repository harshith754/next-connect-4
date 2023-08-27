"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player1Name: '',
  player2Name: '',
};

const playerInfoSlice = createSlice({
  name: 'playerInfo',
  initialState,
  reducers: { //stuff we can do
    setPlayerNames: (state, action) => {
      state.player1Name = action.payload.player1Name;
      state.player2Name = action.payload.player2Name;
    },
  },
});

export const { setPlayerNames } = playerInfoSlice.actions;

export default playerInfoSlice.reducer;
