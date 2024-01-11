import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { selectActiveFilter } from "../store2/filters/filters-selectors";
// import { setFilter } from "../store2/filters/filters-actions";
import { changeTodolistFilterAC } from "../store/redusers/filter-reducers";
import { NavLink, useParams } from "react-router-dom";

export const Filters = () => {
  const { filter = "all" } = useParams();
  console.log(filter);

  return (
    <div style={{ display: "flex", gap: "0.75rem" }}>
      <NavLink to="/all" style={{ color: filter === "all" ? "red" : "black" }}>
        all
      </NavLink>
      <NavLink
        to="/active"
        style={{ color: filter === "active" ? "red" : "black" }}
      >
        active
      </NavLink>
      <NavLink
        to="/completed"
        style={{ color: filter === "completed" ? "red" : "black" }}
      >
        completed
      </NavLink>
    </div>
  );
};
