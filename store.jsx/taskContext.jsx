import { atom } from 'jotai';
export const tasksAtom = atom([]); 

const task = { id: Date.now(), text: "Example Task" };

const deleteTask = (id) => {
  const updatedTasks = tasks.filter(task => task.id !== id);
  setTasks(updatedTasks); 
  saveToStorage(updatedTasks);
};
const saveToStorage = (updatedTasks) => {
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};
function deleteTask(id) {
   
    tasks = tasks.filter(task => task.id !== id);
    
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
   
    renderTasks(); 
}

import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Sample Task", completed: false },
    { id: 2, text: "Finished Task", completed: true },
  ]);

  return (
    <TaskContext.Provider value={{ tasks }}>
      {children}
    </TaskContext.Provider>
  );
};
