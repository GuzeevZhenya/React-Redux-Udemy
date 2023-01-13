// import { createStore } from "redux";

// let nextTodoId = 0;

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO": {
//       return [
//         ...state,
//         { id: ++nextTodoId, title: action.title, completed: false },
//       ];
//     }

//     case "TOGGLE_TODO":
//       {
//         return state.map((todo) =>
//           todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//         );
//       }

//       break;

//     default:
//       return state;
//   }
// };

// const store = createStore(todos);
// //action
// const addTodo = (title) => ({
//   type: "ADD_TODO",
//   title,
// });

// const toggleTodo = (id) => ({
//   type: "TOGGLE_TODO",
//   id,
// });

 
// export const Action = () => {
//   return <div className="App"></div>;
// };
