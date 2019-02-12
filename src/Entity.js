export class Vec {
    constructor(x = 0, y = 0) {
        this.set(x, y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    get len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    set len(value) {
        const fact = value / this.len;
        this.x *= fact;
        this.y *= fact;
    }
}

export class Rect {
    constructor(w, h) {
        this.pos = new Vec;
        this.size = new Vec(w, h);
    }
    get left() {
        return this.pos.x - this.size.x / 2;
    }

    get right() {
        return this.pos.x + this.size.x / 2;
    }

    get top() {
        return this.pos.y - this.size.y / 2;
    }
    get bottom() {
        return this.pos.y + this.size.y / 2;
    }
}

export class Ball extends Rect {
    constructor() {
        super(10, 10);
        this.vel = new Vec;
    }
}

export class Player extends Rect {
    constructor() {
        super(20, 100);
        this.score = 0;
    }
}