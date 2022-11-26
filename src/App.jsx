import React, { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";
import axios from "axios";

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

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setTasks(data)
    }

    fetchTasks();
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTask);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) return { ...task, completed: !task.completed }

      return task;
    });
    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )} />
          <Route path="/:taskTitle" exact component={TaskDetail} />
        </div>
      </Router>
    </>
  )
}

export default App;