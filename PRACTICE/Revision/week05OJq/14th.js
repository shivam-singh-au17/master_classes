
function findSameNum(arr1, arr2) {
    var result = "";
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                result += arr1[i]
            }
        }
    }
    return result;
}


function runProgram(input) {

    var Input = input.split("\n");

    var arr1 = Input[1].split(" ").map(Number);
    var arr2 = Input[2].split(" ").map(Number);

    var res = findSameNum(arr1, arr2);
    console.log(res);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
4 5 7
9 2 5`);
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
