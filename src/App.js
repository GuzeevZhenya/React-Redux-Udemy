// // import "./App.css";
// // import { createStore } from "redux";
// // import { useSelector, useDispatch } from "react-redux";

// // const counter = (state = 0, action) => {
// //   return state;
// // };

// // const store = createStore(counter);

// // function App() {
// //   const dispatch = useDispatch();
// //   const userState = useSelector((state) => console.log(state));
// //   return <div className="App">{}</div>;
// // }

// // export default App;

// import "./App.css";
// import { createStore } from "redux";
// import { useSelector, useDispatch } from "react-redux";

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INC":
//       return state + 1;
//       break;
//     case "DEC":
//       return state - 1;
//       break;
//     case "RES":
//       return 0;
//       break;
//     default:
//       break;
//   }

//   return state;
// };

// const store = createStore(counter);

// const increment = {
//   type: "INC",
// };
// const decrement = {
//   type: "DEC",
// };
// const reset = {
//   type: "RES",
// };

// const count = document.createElement("div");
// count.innerText = store.getState();
// document.body.append(count);
// count.id = "count";

// const decBtn = document.createElement("button");
// decBtn.innerText = "-";
// decBtn.onclick = () => store.dispatch(decrement);
// document.body.append(decBtn);

// const incBtn = document.createElement("button");
// incBtn.innerText = "+";
// incBtn.onclick = () => store.dispatch(increment);
// document.body.append(incBtn);

// const resetBtn = document.createElement("button");
// resetBtn.innerText = "rest";
// resetBtn.onclick = () => store.dispatch(reset);
// document.body.append(resetBtn);

// const render = () => {
//   document.getElementById("count").innerText = store.getState();
// };

// store.subscribe(render);

// function App() {
//   return <div className="App"></div>;
// }

// export default App;

import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset } from "./store/actions/todos-actions";
// import { TodoList } from "./TodoLists/TodoList";
 

export const App = () => {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Couter />
      <br />
      <br />
      {/* <TodoList /> */}
    </div>
  );
};

const Couter = () => {
 
  const count = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      {/* <button onClick={() => dispatch(decrement)}>-</button>
      <button onClick={() => dispatch(reset)}>reset</button>
      <button onClick={() => dispatch(increment)}>+</button> */}
    </div>
  );
};
