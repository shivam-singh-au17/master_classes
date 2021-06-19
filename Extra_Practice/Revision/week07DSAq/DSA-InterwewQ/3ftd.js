

function arrIdxDiff(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            console.log(`The difference between ${i} and ${j} is ${Math.abs(i - j)}`);
        }
    }

}


function runProgram(input) {

    var Input = input.split("\n");

    var arr = Input[1].split(" ").map(Number);

    arrIdxDiff(arr)


}


if (process.env.USERNAME === "shiva") {
    runProgram(`3
1 2 3 4`);
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



