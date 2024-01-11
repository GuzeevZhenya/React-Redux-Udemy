import { legacy_createStore, combineReducers } from "redux";
import { loadState, saveState } from "./local-storage";
import { throttle } from "lodash";

// import { rootReducer } from "./redusers";
import { todoFilterReducer } from "./redusers/filter-reducers";
import { todoReducer } from "./redusers/todos-reducers";

const resistedState = loadState();

export const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = legacy_createStore(rootReducer, resistedState);

store.subscribe(
  throttle(() => {
    saveState({
      todo: store.getState().todo,
    });
  }, 1000)
);
