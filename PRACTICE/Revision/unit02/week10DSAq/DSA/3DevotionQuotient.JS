
function findIndex(arr) {

    var max = arr[0];
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            temp = i;
        }
    }
    return temp;
}

function printResult(str, temp) {
    return str[temp];
}


function runProgram(input) {

    var data = input.split("\n");
    var testCases = Number(data[0]);
    var str = [];
    var arr = [];
    for (var i = 1; i <= testCases; i++) {
        var newData = data[i].split(" ");
        str.push(newData[0]);
        arr.push(Number(newData[1]))
    }

    var max = findIndex(arr);
    var ans = printResult(str, max)
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
zzzz 100
cccc 56
ababa 99`);
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

