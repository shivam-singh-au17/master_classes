
function RecursiveBubbleSort(arr, n = arr.length) {

    if (n == 1) {
        return arr;
    }

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    return RecursiveBubbleSort(arr, n - 1);
}


function runProgram(input) {

    var Input = input.trim().split("\n");

    var len = Number(Input[0]);
    var arr = Input[1].split(" ").map(Number);

    var ans = RecursiveBubbleSort(arr, len);

    var temp = ""
    for (var i = 0; i < ans.length; i++) {
        temp += arr[i] + " ";
    }
    console.log(temp);

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
