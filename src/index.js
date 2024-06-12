import './style.css';
import editSVG from './assets/images/icons/edit_note.svg';

document.body.style.backgroundColor = '#ddd';

console.log('Hello');

const div = document.createElement('div');

const img = new Image();

img.src = editSVG;

div.appendChild(img);

document.body.appendChild(div);
