
var top = -1;
var stack = [];

function myPush(data) {
    top++;
    stack[top] = data
}

function myPop() {
    if (top == -1) {
        return "Empaty"
    } else {
        return stack[top]
    }
    top--;
}


function myPick(data)