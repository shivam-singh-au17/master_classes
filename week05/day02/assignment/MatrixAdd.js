
function firstSeconArrSum(arr1, arr2) {
    var arr1Sum = "";
    for (var i = 0; i < arr1.length; i++) {
        var arr2Sum = ""
        for (var j = 0; j < arr2.length; j++) {
            arr2Sum += (arr1[i][j] + arr2[i][j]) + " "
        }
        arr1Sum += arr2Sum + "\n"
    }
    return arr1Sum;
}


function printResult(r1, c1, r2, c2, res) {
    if (r1 == r2 && c1 == c2) {
        return res;
    } else {
        return -1
    }
}



function lines2arr(row) {
    return row.split(" ").map(Number);
}



function runProgram(input) {

    var inp_split = input.split("\n");
    var arr1_rc = inp_split[0].split(" ").map(Number);

    var r1 = arr1_rc[0]
    var c1 = arr1_rc[1]
    var r2 = arr1_rc[2]
    var c2 = arr1_rc[3]

    var arr1_lines = inp_split.slice(1, r1 + 1);
    var arr2_lines = inp_split.slice(r2 + 1);
    
    var data1 = arr1_lines.map(lines2arr);
    var data2 = arr2_lines.map(lines2arr);
    console.log(data1);
    console.log(data2);

    var arr1Arr2Sum = firstSeconArrSum(data1, data2)
    var result = printResult(r1, c1, r2, c2, arr1Arr2Sum);
    console.log(result);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`2 8 2 8
1 10 5 9 9 3 5 6
6 2 8 2 2 6 3 8
7 2 5 3 4 3 3 2
7 9 6 8 7 2 9 10`);
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
