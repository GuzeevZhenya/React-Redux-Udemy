import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoList } from "./TodoLists/TodoList";
import { App } from "./App";
import { Provider } from "react-redux";
import { configurateStore } from "./store2/store";
// import { store } from "./TodoLists/store";

const store = configurateStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <TodoList />
  </Provider>
);
