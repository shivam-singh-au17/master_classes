function runProgram(input) {

    var input = input.split("\n");
    var newInput = input[1].split("");
    var count = 0;
    for (var i = 0; i < newInput.length; i++) {
        if (newInput[i] == "0" || newInput[i] == "1" || newInput[i] == "2" || newInput[i] == "3" || newInput[i] == "4" || newInput[i] == "5" || newInput[i] == "6" || newInput[i] == "7" || newInput[i] == "8" || newInput[i] == "9") {
            count++
        }
    }
    if (count == 0) {
        console.log("chars");
    } else if (count == input[0]) {
        console.log("numbers");
    } else {
        console.log("alphanumeric");
    }
  

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
123`);
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