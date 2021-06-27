var findOddCount = function (arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            count++;
        }
    }
    if (count % 2 != 0) {
        return "Yes"
    } else {
        return "No";
    }
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCse = Number(Input[0]);

    for (var i = 1; i <= testCse; i++) {
        var newInp = Input[i * 2].split(" ").map(Number);
        var res = findOddCount(newInp);
        console.log(res);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1
1
2
1 101
2
1 200`);
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
