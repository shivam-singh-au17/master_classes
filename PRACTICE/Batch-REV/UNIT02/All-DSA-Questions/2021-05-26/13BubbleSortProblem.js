

function BubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function printResult(arr) {
    var store = "";
    for (var i = 0; i < arr.length; i++) {
        store += arr[i] + " ";
    }
    return store;
}


function runProgram(input) {

    var input = input.split("\n");

    var arr = input[1].split(" ").map(Number);

    var ans = BubbleSort(arr);
    var res = printResult(ans);
    console.log(res);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 5 0 9 8`);
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

