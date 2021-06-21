
function findThef(persionA, persionB, persionC, N) {
    if (persionA > N) {
        return 'Person A';
    } else if (persionB > N) {
        return 'Person B';
    } else if (persionC > N) {
        return 'Person C';
    } else {
        return 'Not found';
    }
}


function runProgram(input) {

    var input = input.split("\n");
    var persionA = Number(input[0]);
    var persionB = Number(input[1]);
    var persionC = Number(input[2]);
    var N = Number(input[3]);

    var result = findThef(persionA, persionB, persionC, N)
    console.log(result);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`30000
12000
43000
31000`);
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