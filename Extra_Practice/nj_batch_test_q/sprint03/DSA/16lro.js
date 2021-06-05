
function findCount(arr) {
    var res = [];
    var temp = arr[0]
    var count = 1;
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] == temp && arr[i] % 2 == 1) {
            count++;
        }
        else {
            res.push(count);
            count = 1;
            temp = arr[i]
        }
    }
    return res;
}

function printResult(res) {
    var max = res[0]
    for (var i = 0; i < res.length; i++) {
        if (res[i] > max) {
            max = res[i]
        }
    }
    return max
}

function runProgram(input) {

    var Input = input.split("\n");

    var newInp = Input[1].split(" ").map(Number);

    var ans = findCount(newInp);
    var ans2 = printResult(ans);
    console.log(ans2);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`12
1 1 1 1 2 2 2 2 2 1 1 1 3 3 3 3 3 8 8 8 3 3 3 3`);
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
