var matSum = function (arr1, arr2) {

    var sumMat2 = "";
    for (var i = 0; i < arr1.length; i++) {
        var sumMat1 = "";
        for (var j = 0; j < arr1[i].length; j++) {
            sumMat1 += arr1[i][j] + arr2[i][j] + " ";
        }
        sumMat2 += sumMat1 + "\n"
    }
    return sumMat2;
}


function runProgram(input) {

    var Input = input.split("\n");

    var rowCol = Input[0].split(" ").map(Number);
    var row1 = rowCol[0]
    var col1 = rowCol[1]
    var row2 = rowCol[2]
    var col2 = rowCol[3]

    var mat1 = []
    for (var i = 1; i <= row1; i++) {
        mat1.push(Input[i].split(" ").map(Number))
    }


    var mat2 = []
    for (var i = row1 + 1; i <= (row1 + row2); i++) {
        mat2.push(Input[i].split(" ").map(Number))
    }


    var result = matSum(mat1, mat2);


    if (row1 == row2 && col1 == col2) {
        console.log(result);
    } else {
        console.log(-1);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2 2 2 2
1 2
3 4
2 3
4 5`);
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
