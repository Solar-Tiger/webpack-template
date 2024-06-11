import { newForm } from './ui/Form';
import { newInput } from './ui/Input';

export function ShowUserAnswerModal(method, placeholder, submitValue, myFunc) {
  const form = newForm(method);

  const userInput = newInput('text');
  userInput.placeholder = placeholder;

  const submitUserAnswer = newInput('submit');

  submitUserAnswer.value = submitValue;

  submitUserAnswer.addEventListener('click', (e) => {
    e.preventDefault();
    myFunc(userInput);
  });

  form.append(userInput, submitUserAnswer);

  return form;
}
