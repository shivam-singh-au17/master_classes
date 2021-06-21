var matSum = function (arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}


function runProgram(input) {

    var Input = input.split("\n");

    var rowCol = Input[0].split(" ").map(Number);
    var row = rowCol[0]
    var col = rowCol[1]

    var mat1 = []
    for (var i = 1; i <= row; i++) {
        mat1.push(Input[i].split(" ").map(Number))
    }
    var mat1Sum = matSum(mat1)



    var rowCol2 = Input[row + 1].split(" ").map(Number);
    var row2 = rowCol2[0]
    var col2 = rowCol2[1]

    var mat2 = []
    for (var i = row + 2; i <= (row + row2 + 1); i++) {
        mat2.push(Input[i].split(" ").map(Number))
    }
    var mat2Sum = matSum(mat2)
  


    if (mat1Sum > mat2Sum) {
        console.log(mat1Sum);
    } else {
        console.log(mat2Sum);
    }


}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 1
4
-4
0
2
1 4
2 4 -7 4`);
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
