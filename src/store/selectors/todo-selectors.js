// export const allTodos = (state) => state.todos;
// export const activeTodos = (state) =>
//   state.todos.filter((todo) => todo.completed !== true);

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todos;
    }

    case "active": {
      return state.todos.filter((el) => !el.completed);
    }

    case "completed": {
      return state.todos.filter((el) => el.completed);
    }

    default: {
      return state.todos;
    }
  }
};
