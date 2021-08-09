
function AlanChristopher(str) {

    let stack = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] != '#') {
            stack.push(str[i]);
        } else {
            stack.pop()
        }
    }
    let stackRes = stack.join("")
    return stackRes;

}


function runProgram(input) {

    let Input = input.split("\n");
    let testCases = Number(Input[0]);

    for (let i = 1; i <= testCases; i++) {

        let str = Input[i];

        let ans = AlanChristopher(str);
        console.log(ans);
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
ab#d
a#bc`);
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





