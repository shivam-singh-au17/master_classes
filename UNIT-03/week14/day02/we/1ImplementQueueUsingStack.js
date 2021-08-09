
class Queue {

    constructor() {
        this.S1 = []
        this.S2 = []
    }
    
    enQueue(value) {

        while (this.S1.length != 0) {
            this.S2.push(this.S1.pop());
        }
        this.S1.push(value);

        while (this.S2.length != 0) {
            this.S1.push(this.S2.pop());
        }
    }

    deQueue() {
        if (this.S1.length == 0) {
            console.log("Q is Empty");
        }
        let value = this.S1[this.S1.length - 1];
        this.S1.pop();
        return value;
    }
    front() {
        return this.S1[this.S1.length - 1]
    }
    isEmpty() {
        if (this.S1.length == 0) {
            return true;
        }
    }
}

function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    let queue = new Queue();
    for (var i = 1; i <= testCases; i++) {
        let data = input[i].split(' ').map(Number);
        if (data[0] == 0) {
            queue.enQueue(data[1])
        }
        if (data[0] == 1) {
            console.log(queue.front());
        }
        if (data[0] == 2) {
            queue.deQueue()
        }

    }

}


runProgram(`6
0 1
0 2
0 3
1
2
1`);



