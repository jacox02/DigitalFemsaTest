import { configureStore } from "@reduxjs/toolkit";
import { movementsSlice } from "../slices";

export const { init, filter } = movementsSlice.actions;

export const store = configureStore({
  reducer: movementsSlice.reducer,
});
