import { loadFromLocalStorage } from "./helpers/handleLocalStorage.mjs";

export async function createTasksList(text) {
  const ol = document.querySelector('#tasks-list');
  const li = document.createElement('li');

  // const getTasks = await fetch(`http://localhost:3336/tasks`, { method: 'GET' }).then((res) => res.json());
  // console.log(getTasks);

  li.classList.add('tasks');
  li.innerHTML = text;
  li.addEventListener('click', handleTaskClick)
  li.addEventListener('dblclick', handleDblClickTasks)
  
  ol.appendChild(li);
  sendTasktoBE(li);
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

export function loadTaskList() {
  const getTasks = loadFromLocalStorage();
  if (getTasks) {
    getTasks.forEach((task) => {
      const newList = createTasksList(task.taskText);
      newList.className = task.taskClass;
    })
  }
}

export async function sendTasktoBE(task) {
  console.log(JSON.stringify({ task: task.innerHTML }));
  const info = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ task: task.innerHTML }),
  };

  const response = await fetch(`http://localhost:3336/tasks`, info).then((res) => res.json());
  // createTasksList(response.task);
}