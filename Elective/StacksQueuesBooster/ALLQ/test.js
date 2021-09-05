
let stack = [];
let mins = [];

function Push(x) {
    stack.push(x);
    if (mins.length == 0 || x <= mins.length - 1) {
        mins.push(x);
    }
}
function Pop() {
    if (!stack.length == 0) {
        temp = stack.pop();
        if (temp == mins.length - 1) {
            mins.pop();
        }
    }
}

function getMin() {
    return mins.length - 1;
}
