import { addListenerToClearSelecteds, createTaskBtn } from "./src/Buttons.mjs";
import { buildAllTasks } from "./src/TasksList.mjs";

export const handleInputText = () => {
  const inputValue = document.querySelector('.add-task');
  const btnCreateTask = document.querySelector('.criar-tarefa');

  inputValue.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) { 
      btnCreateTask.click();
    }
  });
  const text = inputValue.value;
  inputValue.value = '';

  return text;
}

window.onload = async () => {
  await buildAllTasks();
  createTaskBtn();
  handleInputText();
  addListenerToClearSelecteds();
}