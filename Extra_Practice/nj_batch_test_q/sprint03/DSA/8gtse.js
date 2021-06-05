function minELi(arr) {
    var res = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < res) {
            res = arr[i]
        }
    }
    return res;
}


function findGTSE(arr, min) {
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > min) {
            res += -1 + " "
        } else {
            res += arr[i] + " "
        }
    }
    return res;
}


function runProgram(input) {

    var Input = input.split("\n");
    var InputTimes = Number(Input[0]);

    for (var i = 1; i <= InputTimes; i++) {

        var newInp = Input[i * 2].split(" ").map(Number);
        
        var ans = minELi(newInp);
        var result = findGTSE(newInp, ans);
        console.log(result);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
3
1 3 2
5
3 2 2 1 1`);
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
