export const saveToLocalStorage = (content) => {
  localStorage.setItem('tasks', JSON.stringify(content));
}

export const loadFromLocalStorage = () => {
  const content = JSON.parse(localStorage.getItem('tasks'));
  return content;
}