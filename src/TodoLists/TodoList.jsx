import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "../store/actions/todos-actions";
import {allTodos,activeTodos} from '../store/selectors/todo-selectors'

export const TodoList = () => {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <List />
    </div>
  );
};

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="add Todo" />
    </form>
  );
};

const List = () => {
  const todos = useSelector(activeTodos);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type="checkbox"
            onChange={() => dispatch(toggleTodo(todo.id))}
            checked={todo.completed}
          />
          {todo.title}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};
