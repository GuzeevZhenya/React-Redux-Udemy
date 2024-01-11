import { legacy_createStore } from "redux";

let todoId = 1;
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { id: ++todoId, title: action.title, completed: false },
      ];
    }

    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default:
      return state;
  }
};

export const store = legacy_createStore(todos);

// action creators
const addTodo = (title) => ({
  type: "ADD_TODO",
  title,
});

const toggleTodo = (todoId) => ({
  type: "TOGGLE_TODO",
  todoId,
});

console.log(store.getState());

store.dispatch(addTodo("learn react"));

console.log(store.getState());

store.dispatch(addTodo("learn rege"));

console.log(store.getState());

store.dispatch(toggleTodo(2));

console.log(store.getState());

