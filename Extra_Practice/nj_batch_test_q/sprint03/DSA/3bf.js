
function batchfun(num) {
    var batchRK = 1;
    var batchRU = 49;

    var newbatchRK = num - batchRK;
    var newbatchRU = batchRU - num;

    if (newbatchRK < newbatchRU) {
        return 'RK Beach'
    } else if (newbatchRK > newbatchRU) {
        return 'RU Beach'
    } else if (newbatchRK == newbatchRU) {
        return 'Go Anywhere!'
    }
}


function runProgram(input) {

    var Input = Number(input);
    var result = batchfun(Input);

    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`29`);
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
