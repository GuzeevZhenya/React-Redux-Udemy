import { combineReducers } from "redux";
import { filters } from "./filters/filters-reducer";
import { todos } from "./todos/todos-reducer";
export const rootReducer = combineReducers({ todos, filters });
