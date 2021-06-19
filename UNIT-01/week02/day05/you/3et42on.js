function runProgram(input) {
    var input1 = input.split("\n");
    var data = input1[1].trim().split(" ").map(Number)
  
    var newInput = [];
    for (var i = 0; i < data.length; i++) {
        if ((data[i]) == 42) {
            newInput.push(data[i])
        }
    }
    if (newInput == 42) {
        console.log("Yes")
    } else {
        console.log("No")
    }
   

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 7 0 42 8`);
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