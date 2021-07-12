
function findSubString(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var newArr = 0;
        for (var j = i; j < arr.length; j++) {
            newArr += arr[j]
            if (newArr % 2 == 1) {
                count++
            }
        }
    }
    return count;
}


function runProgram(input) {

    var Input = input.split("\n")

    var newInput = Input[1].split(" ").map(Number);

    var result = findSubString(newInput);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1 2 3`);
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
