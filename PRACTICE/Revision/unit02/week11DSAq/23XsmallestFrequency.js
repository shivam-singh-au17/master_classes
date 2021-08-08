
function BubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function Xsmallest(mat, row) {

    let arr = []
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row; j++) {
            if (i == row - j - 1) {
                arr.push(mat[i][j])
            }else
            if (i == j) {
                arr.push(mat[i][j])
            }
        }
    }
    
    let sortedArr = BubbleSort(arr)

    let temp = sortedArr[0];
    let count = 0;
    for (let k = 0; k < sortedArr.length; k++) {
        if (sortedArr[k] == temp) {
            count++;
        }
    }
    return count;

}


function inNumber(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {

    let Input = input.split("\n");
    let testCases = Number(Input[0]);

    let tempRow = 1;

    for (let i = 1; i <= testCases; i++) {
        let row = Number(Input[tempRow]);

        let mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        let newMat = mat.map(inNumber,);

        let res = Xsmallest(newMat, row);
        console.log(res);

        tempRow += row + 1
    }

}



if (process.env.USERNAME === "shiva") {
    runProgram(`1
3
1 1 1
3 4 1
2 3 1`);
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

