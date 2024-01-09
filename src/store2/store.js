import { createStore } from "redux";

import { rootReducer } from "./root-reducer";
import { loadState, saveState } from "./local-storage";

// export const configurateStore = () => {
//   const persisdState = loadState;
//   const store = createStore(rootReducer, persisdState);
//   return store;
// };

export const configurateStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState);

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

// action creators
