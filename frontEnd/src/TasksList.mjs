import { port } from "../../backEnd/server.mjs";
import { loadFromLocalStorage } from "./helpers/handleLocalStorage.mjs";

export function createTasksList(text) {
  const ol = document.querySelector('#tasks-list');
  const li = document.createElement('li');
 
  li.classList.add('tasks');
  li.innerHTML = text;
  li.addEventListener('click', handleTaskClick)
  li.addEventListener('dblclick', handleDblClickTasks)
  
  ol.appendChild(li);
  // sendTasktoBE(li);
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

// async function sendTasktoBE(task) {
//   const info = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     method: 'POST',
//     body: JSON.stringify({ task }),
//   };

  // const taskFetch = await fetch(`http://localhost:${port}/tasks`, info);
  // console.log(taskFetch);
  // const sendTask = await taskFetch((res) => res.json());

  // return sendTask;
// }