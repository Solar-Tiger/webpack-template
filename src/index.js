import './style.css';

console.log('Hello');

const div = document.createElement('div');

const img = new Image();

img.src = './assets/images/icons/edit_note.svg';

div.appendChild(img);

document.body.appendChild(div);
