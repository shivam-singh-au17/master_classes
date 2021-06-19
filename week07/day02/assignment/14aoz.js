
function findZeroz(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] - arr[0] == 0) {
            count++;
        }
    }
    if (count == arr.length) {
        return "YES";
    } else {
        return "NO";
    }
}


function runProgram(input) {

    var Input = input.split("\n");

    var arr = Input[1].split(" ").map(Number);
    var ans = findZeroz(arr);
    console.log(ans);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
2 2`);
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

