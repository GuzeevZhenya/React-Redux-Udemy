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
