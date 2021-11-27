
function AlanFrequency(str) {

    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let key = str[i]
        if (obj[key] === undefined) {
            obj[key] = 1;
        } else {
            let prev_Obj = obj[key];
            obj[key] = prev_Obj + 1;
        }
    }
    for (key in obj) {
        console.log(key + "-" + obj[key]);
    }
}


function runProgram(input) {
    let newInput = input.split("\n");
    let str = newInput[1].split("");
    AlanFrequency(str.sort())
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4
aman`);
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


