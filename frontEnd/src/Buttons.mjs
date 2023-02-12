// import { handleInputText } from "../index.mjs";
// import { createTasksList } from "./TasksList.mjs";
import { deleteRequest } from "./utils/requests.mjs";

const ol = document.querySelector('.tasks-list');

// export function createTaskBtn() {
//   const btnCreateTask = document.querySelector('.criar-tarefa');
//   btnCreateTask.addEventListener('click', () => {
//     const getTask = handleInputText();
//     if (getTask) {
//       return createTasksList(getTask);
//     }; 
//     alert("A tarefa precisa ser descrita.");
//   });
// };

export function addListenerToClearSelecteds() {
  const clearSelecteds = document.querySelector('.del-selected');
  clearSelecteds.addEventListener('click', async function clearSelectedBtn() {
    const selectedTask = document.querySelector('.selected');
    if (!selectedTask) return;
    
    const target = selectedTask.id;
    await deleteRequest(target);
    ol.removeChild(selectedTask);
  });
};
