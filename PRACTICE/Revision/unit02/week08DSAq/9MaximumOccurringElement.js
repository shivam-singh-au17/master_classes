function findMaxFrequent(arr, n) {

    var myObj = {};
    for (var i = 0; i < n; i++) {
        var key = arr[i];
        if (myObj[key] == undefined) {
            myObj[key] = 1;
        } else {
            prevCount = myObj[key];
            myObj[key] = prevCount + 1;
        }
    }

    var res = "";
    var max = 0;
    for (key in myObj) {
        if (myObj[key] > max) {
            max = myObj[key];
            res = key
        }
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
