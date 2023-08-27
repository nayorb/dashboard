import { combineReducers } from "redux";
import cardsReducer from "./cards-slice";
import { createStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  cards: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer /* preloadedState, */,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
