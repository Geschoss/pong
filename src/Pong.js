import { Ball, Player } from './Entity.js';
import Timer from './Timer.js';

export default class Pong {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
        this.ball = new Ball;
        this.timer = new Timer(1 / 60);
        
        this.players = [
            new Player,
            new Player,
        ];
        
        const proxyUpdate = this.update.bind(this);
        this.timer.update = proxyUpdate;


        this.ball.pos.x = 100;
        this.ball.pos.y = 100;

        this.ball.vel.x = 100;
        this.ball.vel.y = 100;
    
        this.players[0].pos.x = 40;
        this.players[1].pos.x = this._canvas.width - 40;
        this.players.forEach(player => {
            player.pos.y = this._canvas.height / 2;
        })

        this.timer.start();
    }
    collide(player, ball) {
        if (player.left < ball.right && player.right > ball.left
            && player.top < ball.bottom && player.bottom > ball.top) {
            this.ball.vel.x = - this.ball.vel.x;
        }
    }
    draw() {
        this._context.fillStyle = '#000';
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
        
        this.drawRect(this.ball);
        this.players.forEach(player => {
            this.drawRect(player);
        })
    }
    drawRect(rect) {
        this._context.fillStyle = '#fff';
        this._context.fillRect(
            rect.left, rect.top,
            rect.size.x, rect.size.y
        );
    }
    update(dt) {
        this.ball.pos.x += this.ball.vel.x * dt;
        this.ball.pos.y += this.ball.vel.y * dt;

        if (this.ball.left < 0 || this.ball.right > this._canvas.width) {
            this.ball.vel.x = - this.ball.vel.x;
        }

        if (this.ball.top < 0 || this.ball.bottom > this._canvas.height) {
            this.ball.vel.y = - this.ball.vel.y;
        }

        this.players[1].pos.y = this.ball.pos.y
        this.players.forEach(player => {
            this.collide(player, this.ball)
        })
        this.draw();
    }
}