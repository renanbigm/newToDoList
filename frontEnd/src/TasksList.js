function createTasksList(text) {
  const ol = document.querySelector('#tasks-list');
  const li = document.createElement('li');
 
  li.classList.add('tasks');
  li.innerHTML = text;
  li.addEventListener('click', handleTaskClick)
  li.addEventListener('dblclick', handleDblClickTasks)
  
  ol.appendChild(li);
  return li;
}

function handleTaskClick(e) {
  const tasksList = document.querySelectorAll('.tasks');
  tasksList.forEach((task) => task.classList.remove('selected'));

  const target = e.target;
  target.classList.add('selected');
}

function handleDblClickTasks(e) {
  const target = e.target;
  target.classList.toggle('completed');
}

function loadTaskList() {
  const getTasks = loadFromLocalStorage();
  if (getTasks) {
    getTasks.forEach((task) => {
      const newList = createTasksList(task.taskText);
      newList.className = task.taskClass;
    })
  }
}