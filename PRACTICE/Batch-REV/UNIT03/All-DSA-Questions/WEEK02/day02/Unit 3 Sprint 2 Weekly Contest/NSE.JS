function runProgram(input) {
    input = input.trim().split("\n")
    let tc = Number(input[0])
    let line = 1
    for (let i = 0; i < tc; i++) {
        let n = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number)
        nextSmaller(n, arr)
    }
}
function nextSmaller(n, arr) {
    let rightSideSmaller = [-1]
    let rightSideStack = [n - 1]
    let leftSideSmaller = [-1]
    let leftSideStack = [0]
    for (let i = n - 2; i >= 0; i--) {
        while (arr[rightSideStack[rightSideStack.length - 1]] >= arr[i]) {
            rightSideStack.pop()
        }
        if (arr[rightSideStack[rightSideStack.length - 1]] < arr[i]) {
            rightSideSmaller.push(rightSideStack[rightSideStack.length - 1])
            rightSideStack.push(i)
        }
        if (rightSideStack.length == 0) {
            rightSideSmaller.push(-1)
            rightSideStack.push(i)
        }
    }
    rightSideSmaller.reverse()
    for (let i = 1; i < n; i++) {
        while (arr[leftSideStack[leftSideStack.length - 1]] >= arr[i]) {
            leftSideStack.pop()
        }
        if (arr[leftSideStack[leftSideStack.length - 1]] < arr[i]) {
            leftSideSmaller.push(leftSideStack[leftSideStack.length - 1])
            leftSideStack.push(i)
        }
        if (leftSideStack.length == 0) {
            leftSideSmaller.push(-1)
            leftSideStack.push(i)
        }
    }
    let ansStack = []
    for (let i = 0; i < n; i++) {
        if (leftSideSmaller[i] == -1 && rightSideSmaller[i] == -1) {
            ansStack.push(-1)
        }
        else if (leftSideSmaller[i] == -1) {
            ansStack.push(rightSideSmaller[i])
        }
        else if (rightSideSmaller[i] == -1) {
            ansStack.push(leftSideSmaller[i])
        }
        else {
            if (Math.abs(i - leftSideSmaller[i]) < Math.abs(i - rightSideSmaller[i])) {
                ansStack.push(leftSideSmaller[i])
            }
            else if (Math.abs(i - leftSideSmaller[i]) > Math.abs(i - rightSideSmaller[i])) {
                ansStack.push(rightSideSmaller[i])
            }
            else {
                ansStack.push(leftSideSmaller[i])
            }
        }
    }
    for (let i = 0; i < ansStack.length; i++) {
        if (ansStack[i] != -1) {
            ansStack[i] = arr[ansStack[i]]
        }
    }
    console.log(ansStack.join(" "))
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});