import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ list }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {list.map((todo, index) => (
        <Todo key={index} title={todo.title} />
      ))}
    </ul>
  );
};
