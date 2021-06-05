
function findEquilibrium(arr) {

    for (var i = 0; i < arr.length; i++) {

        var leftsum = 0;
        for (var j = 0; j < i; j++) {
            leftsum += arr[j];
        }

        var rightsum = 0;
        for (var k = i + 1; k < arr.length; k++) {
            rightsum += arr[k];
        }

        if (leftsum == rightsum) {
            return i;
        }
    }
    return -1;

}

function runProgram(input) {

    var Input = input.split("\n")

    var newInput2 = Input[1].split(" ").map(Number);
    var result = findEquilibrium(newInput2);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 3 5 5 1`);
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
