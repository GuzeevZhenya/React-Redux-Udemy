import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoList } from "./TodoLists/TodoList";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import { configurateStore } from "./store2/store";
// import { store } from "./TodoLists/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// const store = configurateStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />}>
          <Route path=":filter" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
