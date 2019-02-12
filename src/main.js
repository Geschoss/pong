import Pong from './Pong.js';

const canvas = document.getElementById('pong');
const pong = new Pong(canvas);

canvas.addEventListener('mousemove', event => {
    const scale = event.offsetY / event.target.getBoundingClientRect().height;
    pong.players[0].pos.y = canvas.height * scale;
})

canvas.addEventListener('click', event => {
    pong.start();
})