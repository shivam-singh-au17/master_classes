
function findPostive(items) {
    var resume = "";
    for (var i = 0; i < items.length; i++) {
        if (items[i] < 0) {
            items[i] = 0;
        }
        resume += items[i]
    }
    return resume
}


function runProgram(input) {

    var newInput1 = input.split("\n");
    var newInput2 = newInput1[1].split(" ").map(Number);
    
    var result = findPostive(newInput2);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
2 -4 6 8 -9`);
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