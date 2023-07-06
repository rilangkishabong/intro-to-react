import React, { useState } from "react";

export const TodoForm = ({ list, setList }) => {
  const [todo, setTodo] = useState({ title: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim() !== "") {
      setList([...list, todo]);
      setTodo({ ...todo, title: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo"
        name="todo"
        value={todo.title}
        onChange={
            (e) => setTodo({ ...todo, title: e.target.value })
        }
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
