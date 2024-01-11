import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addNewTodoAC,
  removeTodoAC,
  toggleTodoAC,
} from "../store/redusers/todos-reducers.js";
import { selectVisibleTodos } from "../store2/todos/todos-selectors";
import { Filters } from "./Filters";
// import { selectActiveFilter } from "../store2/filters/filters-selectors";
import { createRef } from "react";
import { useParams } from "react-router-dom";

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
    /*1 вариант*/ dispatch(addNewTodoAC(event.target.title.value));
    // /*2 вариант*/ dispatch(inputRef.current.value));
    // event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" ref={inputRef} placeholder="new todo" />
      <input type="submit" value="add Todo" />
    </form>
  );
};

const List = () => {
  const { filter } = useParams();
  console.log(filter);
  const todos = useSelector((state) => selectVisibleTodos(state, filter));

  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type="checkbox"
            onChange={() => dispatch(toggleTodoAC(todo.id))}
            checked={todo.completed}
          />
          {todo.title}
          <button onClick={() => dispatch(removeTodoAC(todo.id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
