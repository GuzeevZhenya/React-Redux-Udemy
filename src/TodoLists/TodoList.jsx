import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "../store/actions/todos-actions";
import { selectVisibleTodos } from "../store2/todos/todos-selectors";
import { Filters } from "./Filters";
import { selectActiveFilter } from "../store2/filters/filters-selectors";
import { createRef } from "react";

export const TodoList = () => {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <Filters />
      <List />
    </div>
  );
};

const NewTodo = () => {
  const dispatch = useDispatch();
  const inputRef = createRef();

  const handleSubmit = (event) => {
    
    event.preventDefault();
    /*1 вариант*/ dispatch(addTodo(event.target.title.value));
    // /*2 вариант*/ dispatch(inputRef.current.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" ref={inputRef} placeholder="new todo" />
      <input type="submit" value="add Todo" />
    </form>
  );
};

const List = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
 
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
