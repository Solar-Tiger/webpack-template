import combineStrings from './combineStrings';

export default function combineInputNames() {
  const inputNameForm = document.createElement('div');

  const textInput1 = document.createElement('input');
  const textInput2 = document.createElement('input');

  textInput1.type = 'text';
  textInput1.placeholder = 'Input first name to combine';

  inputNameForm.appendChild(textInput1);

  textInput2.type = 'text';
  textInput2.placeholder = 'Input second name to combine';

  inputNameForm.appendChild(textInput2);

  const btn = document.createElement('button');

  btn.textContent = 'Combine names';

  inputNameForm.appendChild(btn);

  btn.addEventListener('click', () => {
    const p = document.createElement('p');

    p.textContent = combineStrings(textInput1.value, textInput2.value);

    document.body.appendChild(p);
  });

  document.body.appendChild(inputNameForm);
}
