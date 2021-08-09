
class Stack {

    constructor() {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
        this.Q1.push(value);
    }
    pop() {
        while (this.Q1.queue.length > 1) {
            this.Q2.push(this.Q1.queue.shift())
        }
        let poped = this.Q1.queue.shift()
        this.Q1.queue = this.Q2.queue
        this.Q2.queue = []
        return poped
    }
    top() {
        return this.Q1.queue[this.Q1.queue.length - 1]
    }
    isEmpty() {
        if (this.Q1.queue.length == 0)
            return true;
        else
            return false;
    }
}
