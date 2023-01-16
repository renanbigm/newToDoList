const handleInputText = () => {
  const inputValue = document.querySelector('#add-task');

  const text = inputValue.value;
  inputValue.value = '';

  return text;
}