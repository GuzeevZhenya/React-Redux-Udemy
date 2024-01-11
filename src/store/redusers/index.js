import { combineReducers } from "redux";

import { todoReducer } from "./todos-reducers";
import { todoFilterReducer } from "./filter-reducers";

import { loadState, saveState } from "../local-storage";

const resistedState = loadState();

export const rootReducer = combineReducers(
  { todoReducer, todoFilterReducer },
  resistedState
);
