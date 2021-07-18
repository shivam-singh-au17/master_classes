function runProgram(input) {
    let newInput = input.trim().split("\n");
    let n = +newInput[0];
    let array = newInput[1].trim().split(" ").map(Number);

    let stack = [];
    let str = "";
    for (let i = 0; i < array.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
            stack.pop();
        }
        if (stack.length === 0) {

            str = str + "-1" + " ";
        } else {

            str = str + stack[stack.length - 1] + " ";
        }

        stack.push(array[i]);
    }
    console.log(str);
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


