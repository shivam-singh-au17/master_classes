


function findProd(arr) {
    var prod = 1;
    for (var i = 0; i < arr.length; i++){
        prod *= arr[i]
    }
    return prod;
}


function runProgram(input) {

    var data = input.split("\n");
    var testCases = Number(data[0]);
    for (var i = 1; i <= testCases; i++){
        var newData = data[i].split("").map(Number);

        var res = findProd(newData);
        console.log(res);
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
31
40`);
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