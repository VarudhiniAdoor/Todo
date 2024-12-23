document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

let tasks = [];

// Fetch tasks from the backend
const loadTasks = async () => {
  try {
      const response = await axios.get('http://localhost:8080/api/tasks');
      tasks = response.data;
      updateTasksList();
      updateStats();
  } catch (error) {
      console.error('Error fetching tasks:', error);
  }
};

// Save tasks to the backend
const saveTask = async (task) => {
  try {
      const response = await axios.post('http://localhost:8080/api/tasks', task);
      tasks.push(response.data);
      updateTasksList();
      updateStats();
  } catch (error) {
      console.error('Error saving task:', error);
  }
};

// Update the task status (completed or not)
const toggleTaskComplete = async (index) => {
  const task = tasks[index];
  task.completed = !task.completed;
  try {
      await axios.put(`http://localhost:8080/api/tasks/${task.id}`, task);
      updateTasksList();
      updateStats();
  } catch (error) {
      console.error('Error updating task:', error);
  }
};

// Delete a task
const deleteTask = async (index) => {
  const task = tasks[index];
  try {
      await axios.delete(`http://localhost:8080/api/tasks/${task.id}`);
      tasks.splice(index, 1);
      updateTasksList();
      updateStats();
  } catch (error) {
      console.error('Error deleting task:', error);
  }
};

// Edit a task
const editTask = (index) => {
  const taskInput = document.getElementById('taskInput');
  taskInput.value = tasks[index].text;
  tasks.splice(index, 1);
  updateTasksList();
  updateStats();
};

// Update the task list UI
const updateTasksList = () => {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <div class="taskItem">
              <div class="task ${task.completed ? 'completed' : ''}">
                  <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} />
                  <p>${task.text}</p>
              </div>
              <div class="icons">
                  <img src="./img/edit.png" onClick="editTask(${index})" />
                  <img src="./img/delete.png" onClick="deleteTask(${index})" />
              </div>
          </div>
      `;
      listItem.querySelector('input').addEventListener('change', () => toggleTaskComplete(index));
      taskList.append(listItem);
  });
};

// Update progress and stats
const updateStats = () => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = (completedTasks / totalTasks) * 100;
  const progressBar = document.getElementById("progress");
  progressBar.style.width = `${progress}%`;

  document.getElementById('numbers').innerText = `${completedTasks}/${totalTasks}`;

  if (tasks.length && completedTasks === totalTasks) {
      blast();
  }
};

// Trigger confetti animation on completion
const blast = () => {
  const count = 200;
  const defaults = {
      origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
      confetti(
          Object.assign({}, defaults, opts, {
              particleCount: Math.floor(count * particleRatio),
          })
      );
  }

  fire(0.25, {
      spread: 26,
      startVelocity: 55,
  });

  fire(0.2, {
      spread: 60,
  });

  fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
  });

  fire(0.1, {
      spread: 120,
      startVelocity: 25,  
      decay: 0.92,
      scalar: 1.2,
  });

  fire(0.1, {
      spread: 120,
      startVelocity: 45,
  });
};

// Handle form submission
document.getElementById('newTask').addEventListener('click', function(e) {
  e.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const text = taskInput.value.trim();

  if (text) {
      saveTask({ text, completed: false });
      taskInput.value = "";
  }
});
