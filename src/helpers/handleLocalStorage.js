const saveToLocalStorage = (content) => {
  localStorage.setItem('tasks', JSON.stringify(content));
}

const loadFromLocalStorage = () => {
  const content = JSON.parse(localStorage.getItem('tasks'));
  return content;
}