import './style.css';
import editSVG from './assets/images/icons/edit_note.svg';
import createTodo from './modules/createTodo.js';
import inputTwoNamesToCombine from './modules/inputTwoNamesToCombine.js';
import { userAnswerModal } from './modules/getUserAnswer.js';

document.body.style.backgroundColor = '#ddd';

console.log('Hello');

const div = document.createElement('div');

const img = new Image();

img.src = editSVG;

div.appendChild(img);

document.body.appendChild(div);

createTodo();

inputTwoNamesToCombine();

document.body.appendChild(userAnswerModal());
