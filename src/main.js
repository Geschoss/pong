import Pong from './Pong.js';

const canvas = document.getElementById('pong');
const pong = new Pong(canvas);

canvas.addEventListener('mousemove', event => {
    pong.players[0].pos.y = event.offsetY;
})

canvas.addEventListener('click', event => {
    pong.start();
})