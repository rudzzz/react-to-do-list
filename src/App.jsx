import React, { useState } from "react";
import "./App.css"
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4 as uuidv4} from "uuid"

const App = () => {
  // let message = "Hello, World!";
  const [tasks, setTasks] = useState([
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

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTask);
  }

  const handleTaskClick = (taskiId) => {
    const newTasks = tasks.map(task => {
      if(task.id == taskiId) return {... task, completed: !task.completed}

      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
    </>
  )
}

export default App;