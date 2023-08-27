"use client"

import { configureStore } from '@reduxjs/toolkit';
import playerInfoReducer from './playerInfo/playerInfoSlice';

export const store = configureStore({
  reducer: {
    playerInfo: playerInfoReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});


