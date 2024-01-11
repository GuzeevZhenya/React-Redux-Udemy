export const selectAllTodos = (state) => state.todos;
export const selectActiveTodos = (state) =>
  state.todos.filter((todo) => todo.completed !== true);

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todo;
    }
    case "active": {
      return state.todo.filter((todo) => !todo.completed);
    }
    case "completed": {
      return state.todo.filter((todo) => todo.completed);
    }
    default: {
      return state.todo;
    }
  }
};
