// To-Do App Ultra Simple
// Lógica principal: añadir, listar, marcar tareas y persistencia en localStorage

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = [];

// Cargar tareas de localStorage
function loadTasks() {
  const saved = localStorage.getItem('tasks');
  tasks = saved ? JSON.parse(saved) : [];
}

// Guardar tareas en localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Renderizar tareas en la interfaz
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(idx));
    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) span.classList.add('task-completed');
    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
  });
}

// Añadir nueva tarea
function addTask(e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) {
    alert('La tarea no puede estar vacía.');
    return;
  }
  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = '';
}

// Alternar estado de tarea
function toggleTask(idx) {
  tasks[idx].completed = !tasks[idx].completed;
  saveTasks();
  renderTasks();
}

// Inicialización
loadTasks();
renderTasks();
taskForm.addEventListener('submit', addTask);
