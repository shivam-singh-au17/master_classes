
function localMaxima(arr) {
    if (arr.length < 3) {
        return -1
    } else {
        var count = 0;
        for (var i = 1; i < arr.length - 1; i++) {
            if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
                count++;
            }
        }
        return count;
    }
    
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var newInput2 = Input[i * 2].split(" ").map(Number);
        var result = localMaxima(newInput2);
        console.log(result);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
2
1 2
10
884 729 768 201 266 494 597 328 705 287`);
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
