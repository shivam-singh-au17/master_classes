
function SmallerNeighbourElement(arr) {

    let stack = [];
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res += -1 + " ";
        } else {
            res += stack[stack.length - 1] + " ";
        }
        stack.push(arr[i])
    }
    return res;

}


function runProgram(input) {

    var input = input.split("\n");

    let arr = input[1].trim().split(" ").map(Number);
    let ans = SmallerNeighbourElement(arr);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`8
39 27 11 4 24 32 32 1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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

