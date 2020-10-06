import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([])

  function changeList(event) {
    const newValue = event.target.value;

    setTodo(newValue);
  }

  function addItem() {
    setList((firstValue) => {
      return [...firstValue, todo];
    });
    setTodo("");
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form action="">
          <input onChange={changeList} type="text" value={todo} required />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {list.map((item, index) => {
          return <ToDoList key={index} text={item} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
