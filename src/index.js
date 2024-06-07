import './style.css';
import editSVG from './assets/images/icons/edit_note.svg';
import createTodo from './modules/createTodo.js';

console.log('Hello');

const div = document.createElement('div');

const img = new Image();

img.src = editSVG;

div.appendChild(img);

document.body.appendChild(div);

createTodo();
