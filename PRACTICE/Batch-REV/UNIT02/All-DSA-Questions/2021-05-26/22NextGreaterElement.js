


function lNextGreaterElement(arr) {
    var next, i, j;
    let store = ""
    for (i = 0; i < arr.length; i++) {
        next = -1;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        store += next + " ";
    }
    console.log(store);
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var arr = Input[i * 2].trim().split(" ").map(Number);

        lNextGreaterElement(arr)
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
4
1 3 2 4`);
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

