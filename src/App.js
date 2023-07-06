import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/todo/TodoForm";
import { TodoList } from "./components/todo/TodoList";


function App() {
  const [list, setList] = useState([]);
  console.log("list: ", list);
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Todo List</h4>
      <TodoForm setList={setList} list={list} />
      <TodoList list={list} />
    </div>
  );
}


export default App;