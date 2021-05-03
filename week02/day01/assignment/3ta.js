
function runProgram(input) {

    var input1 = input.split(" ");

    var scoreAus = Number(input1[0]);
    var scoreEng = Number(input1[1]);

    if (scoreAus > scoreEng) {
        console.log("Australia");
    }
    else if (scoreAus < scoreEng) {
        console.log("England");
    }
    else {
        console.log("Tie");
    }


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