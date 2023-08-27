import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum AppCardType {
  actror = "actor",
}

export interface AppCard {
  id: string;
  name: string;
  type: AppCardType;
}

const initialState: AppCard[] = [];

const slice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state: AppCard[], action: any) {
      state.push(action.payload);
    },
  },
});

export const cardsActions = slice.actions;

export const selectCards = (state: RootState) => state.cards;

export default slice.reducer;
