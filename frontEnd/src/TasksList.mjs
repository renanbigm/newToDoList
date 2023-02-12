import { getRequest, postRequest, putRequest } from "./utils/requests.mjs";

const ol = document.querySelector('.tasks-list');

function liFactory(task, id, position) {
  const li = document.createElement('li');
  li.innerHTML = task;
  li.className = 'tasks';
  li.id = id;
  li.name = position;
  li.addEventListener('click', handleTaskClick);
  li.addEventListener('dblclick', handleDblClickTasks);
  ol.appendChild(li);
  
  return li;
}

export async function createTasksList(text) {
  const { position, id } = await postRequest(text);
  liFactory(text, id, position);
};

export async function buildAllTasks() {
  const getTasks = await getRequest();

  getTasks.forEach((task) => {
    const buildLi = liFactory(task.task, task.id, task.index);
    if (task.class) {
      buildLi.className = task.class;
    };
  });
};

function handleTaskClick(e) {
  const tasksList = document.querySelectorAll('.tasks');
  tasksList.forEach((task) => task.classList.remove('selected'));

  const target = e.target;
  target.classList.add('selected');
};

async function handleDblClickTasks(e) {
  const target = e.target;
  target.classList.toggle('completed');
  const classWithoutSelected = target.className.split('selected').join('');

  await putRequest(target.id, classWithoutSelected);
};
