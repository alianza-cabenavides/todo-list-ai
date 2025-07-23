// To-Do App Ultra Simple
// Lógica principal: añadir, listar, marcar tareas y persistencia en localStorage

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const clearCompletedBtn = document.getElementById('clear-completed');
const errorMessage = document.getElementById('error-message');

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
    if (tasks.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.textContent = 'No hay tareas pendientes.';
        emptyMsg.className = 'task-item';
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.color = '#888';
        taskList.appendChild(emptyMsg);
        return;
    }
    // Usar DocumentFragment para optimizar el renderizado
    const fragment = document.createDocumentFragment();
    tasks.forEach((task, idx) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.idx = idx;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.tabIndex = 0;
        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.completed) span.classList.add('task-completed');
        // Botón para eliminar tarea individual
        const delBtn = document.createElement('button');
        delBtn.className = 'delete-task-btn';
        delBtn.type = 'button';
        delBtn.title = 'Eliminar tarea';
        delBtn.setAttribute('aria-label', 'Eliminar tarea');
        delBtn.innerHTML = '🗑️';
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);
        fragment.appendChild(li);
    });
    taskList.appendChild(fragment);
}

// Añadir nueva tarea
function addTask(e) {
    e.preventDefault();
    const text = taskInput.value.trim();
    errorMessage.textContent = '';
    if (!text) {
        errorMessage.textContent = 'La tarea no puede estar vacía.';
        taskInput.focus();
        return;
    }
    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = '';
    taskInput.focus();
}

// Delegación de eventos para la lista de tareas
taskList.addEventListener('click', function(e) {
    const li = e.target.closest('li.task-item');
    if (!li || !li.dataset.idx) return;
    const idx = Number(li.dataset.idx);
    if (e.target.classList.contains('task-checkbox')) {
        toggleTask(idx);
    } else if (e.target.classList.contains('delete-task-btn')) {
        deleteTask(idx);
    }
});

// Alternar estado de tarea
function toggleTask(idx) {
    tasks[idx].completed = !tasks[idx].completed;
    saveTasks();
    renderTasks();
}

// Eliminar tarea individual
function deleteTask(idx) {
    tasks.splice(idx, 1);
    saveTasks();
    renderTasks();
}

// Limpiar tareas completadas
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
}

// Inicialización
loadTasks();
renderTasks();
taskForm.addEventListener('submit', addTask);
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
