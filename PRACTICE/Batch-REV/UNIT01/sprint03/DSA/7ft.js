
function findTHEF(PersionA, PersionB, PersionC, N) {

    if (PersionA > N) {
        return 'Persion A'
    } else if (PersionB > N) {
        return 'Persion B'
    } else if (PersionC > N) {
        return 'Persion C'
    } else {
        return 'Not Found'
    }
}


function runProgram(input) {

    var Input = input.split("\n");
    var PersionA = Number(Input[0]);
    var PersionB = Number(Input[1]);
    var PersionC = Number(Input[2]);
    var N = Number(Input[3]);

    var result = findTHEF(PersionA, PersionB, PersionC, N);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`30000
12000
13000
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
