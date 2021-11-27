


function NextGreaterElement(arr) {

    const result = [];
    const stack = [];

    for (let j = 0; j < arr.length; j++) {
        result.push(-1);
    }

    for (let i = 0; i < arr.length * 2; i++) {
        let num = arr[i];
        while (stack.length && arr[stack[stack.length - 1]] < num) {
            result[stack.pop()] = num;
        }
        if (i < arr.length) {
            stack.push(i);
        }
    }
    return result.join(" ");
}





function runProgram(input) {

    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    for (let i = 1; i <= testCases; i++) {
        let arr = newInput[i * 2].split(" ").map(Number);
        console.log(NextGreaterElement(arr));
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
4
1 3 2 12 4 5 7 3 7 9`);
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

