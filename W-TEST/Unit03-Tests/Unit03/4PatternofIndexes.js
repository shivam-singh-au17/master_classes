

function printRes(num) {
    for (let i = 0; i < num; i++) {
        let res = "";
        for (let j = 0; j < num; j++) {
            if (j % 2 == 1 ) {
                res += j + " "
            } else {
                res += i + " "
            }
        }
        console.log(res);
    }
}


function runProgram(input) {

    let num = Number(input);
    printRes(num);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`5`);
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
