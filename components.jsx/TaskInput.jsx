<div class="task-input-section">
  <input type="text" id="taskInput" placeholder="Enter a new task..." />
  <button id="addTaskBtn">Add Task</button>
</div>
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasks = []; 

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

   
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    
   
    taskInput.value = "";
    
    console.log("Task added:", newTask);
});
