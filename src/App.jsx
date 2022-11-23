import React, { useState } from "react";
import "./App.css"
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  // let message = "Hello, World!";
  const [tasks, setTaks] = useState([
    {
      id: "1",
      title: "Tarefa 1",
      completed: false
    },
    {
      id: "2",
      title: "Tarefa 2",
      completed: true
    }
  ]);
  return (
    <>
      <div className="container">
        <AddTask/>
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
}

export default App;