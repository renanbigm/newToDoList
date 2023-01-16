const ol = document.querySelector('#tasks-list');

function createTaskBtn() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', () => {
    const getTask = handleInputText();
    createTasksList(getTask);
  });
}

function clearAllTasksBtn() {
  ol.innerHTML = '';
}

function clearCompletedTasksBtn() {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => ol.removeChild(task));
}

function saveTasksBtn() {
  const allTasks = document.querySelectorAll('.tasks');

  const tasksToSave = [];
  allTasks.forEach((task) => (
    tasksToSave.push({
      taskText: task.innerHTML,
      taskClass: task.className, 
    })
  ));

  saveToLocalStorage(tasksToSave);
}

function moveTaskBtns() {
  const target = event.target;
  const validation = target.id.includes('up');
  
  const checkList = validation ? 'previousElementSibling' : 'nextElementSibling';
  const movement = validation ? 'beforebegin' : 'afterend';
    
  const selectedTask = document.querySelector('.selected');

  if (selectedTask[checkList]) {
    selectedTask[checkList]
      .insertAdjacentElement(movement, selectedTask);
  }
}

function clearSelectedBtn() {
  const selectedTask = document.querySelector('.selected');
  if (!selectedTask) return;
  ol.removeChild(selectedTask);
}
