export default function createTodo() {
  const todoForm = document.createElement('div');

  const textInput = document.createElement('input');

  textInput.type = 'text';
  textInput.placeholder = 'Think of a TODO...';

  todoForm.appendChild(textInput);

  const todoAddButton = document.createElement('button');

  todoAddButton.textContent = 'Create TODO';

  todoForm.appendChild(todoAddButton);

  todoAddButton.addEventListener('click', () => {
    const p = document.createElement('p');

    p.textContent = textInput.value;

    document.body.appendChild(p);
  });

  document.body.appendChild(todoForm);
}
