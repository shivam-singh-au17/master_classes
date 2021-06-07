
function findPrime(num) {
    if (num <= 1) {
        return "No"
    } else {
        var count = 0;
        for (var i = 2; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count < 2) {
            return "Yes"
        } else {
            return "No"
        }
    }
}

function runProgram(input) {


    var Input = Number(input);
    var res = findPrime(Input);
    console.log(res);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`13`);
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
