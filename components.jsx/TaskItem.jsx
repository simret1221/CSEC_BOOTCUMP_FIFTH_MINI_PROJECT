
import React from 'react';
import './TaskItem.css'; 

const TaskItem = ({ task, toggleTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span className="task-text">{task.text}</span>
    </div>
  );
};

export default TaskItem;
