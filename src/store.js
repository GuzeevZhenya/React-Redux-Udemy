import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INC": {
      return state + 1;
    }
    case "DEC": {
      return state - 1;
    }
    case "RESET": {
      return 0;
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(counter);

export const increment = { type: "INC" };
export const decrement = { type: "DEC" };
export const reset = { type: "RESET" };
