import { getRequest, postRequest, putRequest } from "./utils/requests.mjs";

const ol = document.querySelector('.tasks-list');

export async function createTasksList(text) {
  const { position, id } = await postRequest(text);

  const li = document.createElement('li');
  li.innerHTML = text;
  li.className = 'tasks';
  li.id = id;
  li.name = position;
  li.addEventListener('click', handleTaskClick);
  li.addEventListener('dblclick', handleDblClickTasks);
  ol.appendChild(li);
};

export async function buildAllTasks() {
  const getTasks = await getRequest();

  getTasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('tasks');
    if (task.class) {
      li.className = task.class;
    };

    li.innerHTML = task.task;
    li.id = task.id;
    li.name = task.index;
    li.addEventListener('click', handleTaskClick);
    li.addEventListener('dblclick', handleDblClickTasks);
    ol.appendChild(li);
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
