// export const todos = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO": {
//       return [
//         ...state,
//         {
//           id: Date.now(),
//           title: action.title,
//           completed: false,
//         },
//       ];
//     }
//     case "REMOVE_TODO": {
//       return state.filter((todo) => todo.id !== action.id);
//     }
//     case "TOGGLE_TODO": {
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       );
//     }
//     default: {
//       return state;
//     }
//   }
// };

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD-TODO": {
      console.log(1);
      return [
        ...state,
        { title: action.title, id: Date.now(), completed: false },
      ];
    }
    case "REMOVE-TODO": {
      return state.filter((el) => el.id !== action.id);
    }

    case "TOGGLE-TODO": {
      return state.map((el) =>
        el.id === action.id ? { ...el, completed: !el.completed } : el
      );
    }
    default:
      console.log(3);
      return state;
  }
};

export const addNewTodoAC = (title) => ({
  type: "ADD-TODO",
  title,
});

export const removeTodoAC = (id) => ({
  type: "REMOVE-TODO",
  id,
});

export const toggleTodoAC = (id) => ({
  type: "TOGGLE-TODO",
  id,
});
