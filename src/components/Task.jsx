import React from "react";
import "./Task.css";
import {CgClose, CgInfo} from "react-icons/cg";

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (
        <div className="task-container" style={task.completed ? {borderLeft: '6px solid rgb(187, 192, 42)'} : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button className="remove-task" onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose/>
                </button>
                <button className="task-detail">
                    <CgInfo/>
                </button>
            </div>
        </div>
    )
    
}

export default Task;