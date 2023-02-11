import { addListenerToClearAll,
  addListenerToClearCompletedTasks,
  addListenerToClearSelectetds,
  addListenerToMoveBtns, 
  addListenerToSaveTasks,
  createTaskBtn 
} from "./src/Buttons.mjs";

import { createTasksList } from "./src/TasksList.mjs";

window.onload = () => {
  // loadTaskList();
  createTasksList();
  createTaskBtn();
  addListenerToClearAll();
  addListenerToClearCompletedTasks();
  addListenerToSaveTasks();
  addListenerToMoveBtns();
  addListenerToClearSelectetds();
}