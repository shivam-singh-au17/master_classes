function PartyOrNot(C, R, arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + sum <= R) {
            sum += arr[i]
            count++;
        } else {
            break;
        }
    }
    if (count == C) {
        console.log("Party")
    } else {
        console.log("Sad")
    }
}

function runProgram(input) {

    let Input = input.split("\n");

    let NandCandR = Input[0].split(" ").map(Number);
    let C = NandCandR[1];
    let R = NandCandR[2];
    let arr = Input[1].split(" ").map(Number);
    arr.sort((a, b) => { return a - b });
    PartyOrNot(C, R, arr)

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5 3 24
6 4 21 20 13`);
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