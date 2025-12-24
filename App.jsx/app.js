import { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');

// 1. Theme Management (Persistence)
themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// 2. Task Management (Persistence)
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 animate-in fade-in duration-200`;
        
        li.innerHTML = `
            <span class="flex-1 ${task.completed ? 'line-through text-gray-400' : ''}">${task.text}</span>
            <div class="flex gap-2">
                <button onclick="toggleTask(${index})" class="text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 p-2 rounded-md">
                    ✓
                </button>
                <button onclick="deleteTask(${index})" class="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-md">
                    ✕
                </button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// Add Task
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        todoInput.value = '';
        saveTasks();
        renderTasks();
    }
});

// Toggle Task Complete
window.toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
};

// Delete Task
window.deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
};

// Initial Render
renderTasks();
