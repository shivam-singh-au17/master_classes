

function aDDDignol(mat, row) {
    var store = []
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < row; j++) {
            if ((i == j) || (i == row - j - 1)) {
                store.push(mat[i][j]);
            }
        }
    }

    return store;
}


function FindSmall(store) {
    var min = store[0];
    for (var i = 0; i < store.length; i++) {
        if (store[i] < min) {
            min = store[i]
        }
    }
    return min;
}

function findSmallCount(arr, min) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == min) {
            count++
        }
    }
    if (count % 2 == 0) {
        return "yes"
    } else {
        return "no"
    }
}


function inNumber(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    var tempRow = 1;

    for (var i = 1; i <= testCases; i++) {
        var row = Number(Input[tempRow]);
        
        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);
       
        var res1 = aDDDignol(newMat, row)

        var minNum = FindSmall(res1)

        var finalRES = findSmallCount(res1, minNum)
        console.log(finalRES);

        tempRow += row + 1
    }


}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
2
1 4
4 1
3
1 2 3
4 1 6
7 8 1`);
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




