import { handleInputText } from "./helpers/handleInputs.mjs";
import { saveToLocalStorage } from "./helpers/handleLocalStorage.mjs";
import { createTasksList } from "./TasksList.mjs";

const ol = document.querySelector('#tasks-list');

export function createTaskBtn() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', () => {
    const getTask = handleInputText();
    createTasksList(getTask);
  });
}

export function addListenerToClearAll() {
  const clearAllTasksBtn = document.querySelector('#del-all');
  clearAllTasksBtn.addEventListener('click', function clearAllTasksBtn() {
  ol.innerHTML = '';
  });
}

export function addListenerToClearCompletedTasks() {
  const clearCompletedTasksBtn = document.querySelector('#del-all-completeds');
  clearCompletedTasksBtn.addEventListener('click', function clearCompletedTasksBtn() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach((task) => ol.removeChild(task));
  });
}

export function addListenerToSaveTasks() {
  const saveBtn = document.querySelector('#save-tasks');
  saveBtn.addEventListener('click', function saveTasksBtn() {
    const allTasks = document.querySelectorAll('.tasks');
  
    const tasksToSave = [];
    allTasks.forEach((task) => (
      tasksToSave.push({
        taskText: task.innerHTML,
        taskClass: task.className, 
      }))
    );
  
    saveToLocalStorage(tasksToSave);
  });
}

export function addListenerToMoveBtns() {
  const moveBtns = document.querySelectorAll('.move-btn');
  moveBtns.forEach((btn) => btn.addEventListener('click', function moveTaskBtns() {
    const target = event.target;
    const validation = target.id.includes('up');
    
    const checkList = validation ? 'previousElementSibling' : 'nextElementSibling';
    const movement = validation ? 'beforebegin' : 'afterend';
      
    const selectedTask = document.querySelector('.selected');
  
    if (selectedTask[checkList]) {
      selectedTask[checkList]
        .insertAdjacentElement(movement, selectedTask);
    };
  }));
}

export function addListenerToClearSelectetds() {
  const clearSelecteds = document.querySelector('#del-selected');
  clearSelecteds.addEventListener('click', async function clearSelectedBtn() {
    const target = await fetch(`http://localhost:3336/tasks/59f34d29-b965-4b0c-b9f4-cf459d76e70b`, { method: 'DELETE' }).then((res) => res.json());
    console.log(target)
    const selectedTask = document.querySelector('.selected');
    if (!selectedTask) return;
    ol.removeChild(selectedTask);
  });
}

