function findMaxFrequent(arr, n) {

    arr.sort();

    var res = arr[0];
    var max_count = 1
    var curr_count = 1;

    for (var i = 1; i < n; i++) {

        if (arr[i] == arr[i - 1]) {
            curr_count++;
            console.log('curr_count:', curr_count)
        } else {
            if (curr_count > max_count) {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }
    if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[n - 1];
    }
    return res;
}


function runProgram(input) {

    var Input = input.split("\n");

    var n = Number(Input[0]);
    var arr = Input[1].trim().split(" ").map(Number);

    var ans = findMaxFrequent(arr, n);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`11
1 1 1 1 0 0 0 2 2 2 2`);
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
