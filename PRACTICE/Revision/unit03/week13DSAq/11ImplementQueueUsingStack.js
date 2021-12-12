
class Queue {
    constructor() {
        this.s1 = new Stack()
        this.s2 = new Stack()
    }
    push(value) {
        this.s1.push(value);
    }
    pop() {
        while (this.s1.stack.length > 1) {
            this.s2.push(this.s1.stack.pop());
        }
        var temp = this.s1.pop();
        this.s2.stack.reverse();
        [this.s1.stack, this.s2.stack] = [this.s2.stack, this.s1.stack]
    }
    front() {
        return this.s1.stack[0];
    }
    isEmpty() {
        if (this.s1.stack.length == 0)
            return true;
        else
            return false;
    }
}