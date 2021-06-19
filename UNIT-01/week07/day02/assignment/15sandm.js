

function StringMatrix(mat, row, myStr) {

    var i = 0
    var ans = true
    while (myStr.length != i) {
            if (myStr[i] == mat[i % row]){
                ans = true
                mat[i % row] = mat[i % row].replace(myStr[i], '', 1)
                break
            } else {
                ans = false
                break
            }
    
            i += 1
    }
    console.log(ans);
    return ans
}


// function StringMatrix(mat, row, col, myStr) {
//     var count = 0;
//     for (var i = 0; i < myStr.length; i++) {
//         for (var j = 0; j < row; j++) {
//             for (var k = 0; k < col; k++) {
//                 if (myStr[i] == mat[j][k]) {
//                     count++;
//                     mat[j][k] = mat[j][k].replace(myStr[i], "")
//                     // return true
//                 } 
//             }
//         }
//     }
//     // if (count == myStr.length) {
//     //     return "YES"
//     // } else {
//     //     return "NO"
//     // }
//     console.log(mat);
//     // console.log(count);
//     return count;
// }


function isString(row) {
    return row;
}

function runProgram(input) {

    var Input = input.split("\n");
    var testcases = Number(Input[0]);

    var tempRow = 0;
    for (var i = 1; i <= testcases; i++) {

        var rowCol = Input[tempRow + i].split(" ").map(Number);
        var row = rowCol[0];
        var col = rowCol[1];

        var mat = Input.slice((tempRow + i + 1), (row + 1 + i + tempRow));
        var newMat = mat.map(isString);
        var myStr = Input[tempRow + i + row + 1];

        // console.log(rowCol);
        // console.log(row);
        // console.log(myStr);
        // console.log(newMat);

        var result = StringMatrix(newMat, row, col, myStr);
        console.log(result);

        tempRow += row + 1


    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
3 3
aba
xyz
bdr
axb`);
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

