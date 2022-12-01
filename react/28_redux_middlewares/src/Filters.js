import React from "react";

import { useDispatch } from "react-redux";
import { filterChanged } from "./redux/todosSlice";

const Filters = () => {
  const dispatch = useDispatch();

  const filter = (filterType, e) => {
    e.preventDefault();

    dispatch(filterChanged({ filterType }));
  };

  return (
    <form className="filters-form">
      <a
        href="/"
        onClick={(e) => {
          filter("All", e);
        }}
      >
        All
      </a>

      <a
        href="/"
        onClick={(e) => {
          filter("Open", e);
        }}
      >
        Open
      </a>

      <a
        href="/"
        onClick={(e) => {
          filter("Complete", e);
        }}
      >
        Complete
      </a>
    </form>
  );
};

export default Filters;
