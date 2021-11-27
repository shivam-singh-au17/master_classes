let myStack = [];
let topp = -1;

function push(e) {
    topp++;
    myStack[topp] = e;
}

function pop() {
    if (topp == -1)
        return 0;
    else {
        let popped_ele = myStack[topp];
        topp--;
        return popped_ele;
    }
}

function operator(oprd) {
    if (oprd == '+' || oprd == '-' ||
        oprd == '^' || oprd == '*' ||
        oprd == '/' || oprd == '(' ||
        oprd == ')') {
        return true;
    }
    else
        return false;
}


function precedency(pre) {
    if (pre == '@' || pre == '(' || pre == ')') {
        return 1;
    }
    else if (pre == '+' || pre == '-') {
        return 2;
    }
    else if (pre == '/' || pre == '*') {
        return 3;
    }
    else if (pre == '^') {
        return 4;
    }
    else
        return 0;
}

function InfixtoPostfix(infixval) {

    let postfix = [];
    let temp = 0;
    push('@');

    for (let i = 0; i < infixval.length; i++) {
        let el = infixval[i];

        if (operator(el) == true) {
            if (el == ')') {
                while (myStack[topp] != "(") {
                    postfix[temp++] = pop();
                }
                pop();
            }

            else if (el == '(') {
                push(el);
            }
            else if (precedency(el) > precedency(myStack[topp])) {
                push(el);
            }
            else {
                while (precedency(el) <=
                    precedency(myStack[topp]) && topp > -1) {
                    postfix[temp++] = pop();
                }
                push(el);
            }
        }
        else {
            postfix[temp++] = el;
        }
    }

    while (myStack[topp] != '@') {
        postfix[temp++] = pop();
    }

    let str = "";
    for (let i = 0; i < postfix.length; i++)
        str += postfix[i];

    return str;
}


function runProgram(input) {

    console.log(InfixtoPostfix(input));

}

if (process.env.USERNAME === "shiva") {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}