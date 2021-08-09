
let f = -1;
let r = -1;
let size = 5;

let queue = [];

let arr = [7, 1, 4, 3, 2];

function isFull() {
    return (r == (size - 1))
}

function isEmpety() {
    return ((r == -1) && (f == -1))
}

function enQueue() {
    if (isFull()) {
        console.log("OF");
        return
    } else if (isEmpety()) {
        f = 0;
        r = 0;
    } else {
        r = r + 1;
        arr[r] = x;
    }
}

function deQueue() {
    y = arr[f]
    if (isEmpety()) {
        console.log("UF");
        return
    }else if (f == r) {
        f = -1
        r = -1
    } else {
        f = f + 1
        return y
    }
}
