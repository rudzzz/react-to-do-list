import React from "react";
import "./Task.css"

const Task = ({task, handleTaskClick}) => {
    return (
        <div className="task-container" style={task.complete ? {borderLeft: '6px solid rgb(187, 192, 42)'} : {}}>
            
        </div>
        // <div className="task-container">
        //     {task.title}
        // </div>
    )
    
}

export default Task;