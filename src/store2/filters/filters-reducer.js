export const filters = (state = "all", action) => {
  switch (action.type) {
    case "SET_FILTERS": {
      return action.filter;
    }
    default:
      return state;
  }
};
