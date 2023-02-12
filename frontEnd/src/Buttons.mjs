import { deleteRequest } from "./utils/requests.mjs";

const ol = document.querySelector('.tasks-list');

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
