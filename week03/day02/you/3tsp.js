function runProgram(input) {

    var input = input.split("\n");
    var newInput1 = input[0];
    var newInput2 = input[1];
    var string = false;

    for (var i = 0; i < newInput1.length; i++) {
        var substring = "";
        for (var j = i; j < newInput1.length; j++) {
            substring += newInput1[j]
            if (substring == newInput2) {
                string = true;
            } 
        }
    }
    if (string == true) {
        console.log("Yes");
    } else {
        console.log("No");
    }
   
}
if (process.env.USERNAME === "shiva") {
    runProgram(`masai
sai`);
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