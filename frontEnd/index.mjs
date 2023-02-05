import { addListenerToClearAll,
  addListenerToClearCompletedTasks,
  addListenerToClearSelectetds,
  addListenerToMoveBtns, 
  addListenerToSaveTasks,
  createTaskBtn 
} from "./src/Buttons.mjs";

import { loadTaskList } from "./src/TasksList.mjs";

window.onload = () => {
  // loadTaskList();
  createTaskBtn();
  addListenerToClearAll();
  addListenerToClearCompletedTasks();
  addListenerToSaveTasks();
  addListenerToMoveBtns();
  addListenerToClearSelectetds();
}