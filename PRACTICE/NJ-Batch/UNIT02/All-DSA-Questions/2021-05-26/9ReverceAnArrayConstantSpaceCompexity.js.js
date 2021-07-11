

function ReverseArray(arr) {

    var start = 0;
    var end = arr.length - 1;
    var temp = null;

    while (start < end) {

        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

function printResult(arr) {
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        res += arr[i] + " ";
    }
    return res;
}

function runProgram(input) {

    var Input = input.split("\n");

    var arr = Input[1].trim().split(" ").map(Number);

    var ans = ReverseArray(arr);
    var res = printResult(ans)
    console.log(res);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`6
1 5 4 3 2 6`);
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