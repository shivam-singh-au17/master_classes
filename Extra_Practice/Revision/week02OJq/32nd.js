function runProgram(input) {
    var input = input.split("\n")
    var newInput = input[1].trim().split(" ").map(Number);

    var result = [];
    
    for (var i = 0; i < newInput.length; i++) {
        if (newInput[i] == 42) {
           result.push(newInput[i])
        } 
    }
    if (result == 42) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 7 0 4 8`);
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