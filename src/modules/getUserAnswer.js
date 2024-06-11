import { ShowUserAnswerModal } from '../components/GetUserAnswerModal';

function getUserAnswer(userInput) {
  console.log(userInput.value);
}

export function userAnswerModal() {
  return ShowUserAnswerModal(
    'GET',
    'Click this or die...',
    'Submit ME!',
    getUserAnswer
  );
}
