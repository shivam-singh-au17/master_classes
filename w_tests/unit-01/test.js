

function aDDDignol(mat, row) {
    var store = []
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < row; j++) {
            if (  i  != row - j - 1 && i != j) {
                store.push(mat[i][j]);
            }
        }
    }

    return store;
}


function FindOp(store) {
    var count = 0
    for (var i = 0; i < store.length; i++) {
        if (store[i] ==  "+") {
            count++;
        }
    }
    if (count != 0) {
        return count*2
    } else {
        return -1
    }
}


function inNumber(row) {
    return row.split("");
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    var tempRow = 1;

    for (var i = 1; i <= testCases; i++) {
        var row = Number(Input[tempRow]);

        var mat =- Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);

        var res1 = aDDDignol(newMat, row)

        var resCount = FindOp(res1)

        console.log(resCount);

        tempRow += row + 1
    }


}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
3
+*x
+x*
x+*
2
*x
x*`);
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




