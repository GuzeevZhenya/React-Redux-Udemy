const initialState = {
  filter: "all",
};

export const todoFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE-FILTER": {
      return {
        ...state,
        filter: action.filter,
      };
    }

    default:
      return state;
  }
};

export const changeTodolistFilterAC = (filter) => ({
  type: "CHANGE-FILTER",
  filter,
});
