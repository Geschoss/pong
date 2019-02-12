export default class Timer {
    constructor(deltaTime = 1/60) {
        let accumulateTime = 0;
        let lastTime = 0;
    
        this.updateProxy = time => {
            accumulateTime += (time - lastTime) / 1000;
            
            while(accumulateTime > deltaTime) {
                this.update(deltaTime);
                accumulateTime -= deltaTime;
            }
        
            lastTime = time;

            this.enqueue()
        }
    }

    enqueue() {
        requestAnimationFrame(this.updateProxy); 
    }

    start() {
        this.enqueue()
    }
}