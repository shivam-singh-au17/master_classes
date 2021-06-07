var mat1 = [
    [1, 2, 1],
    [2, 1, 2],
    [1, 2, 1]
];


var mat2 = [

    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
];



var row = mat1.length;
var col = mat2[0].length;

var allSum = ""
for (var i = 0; i < row; i++) {
    var sum = " ";
    for (var j = 0; j < col; j++) {
        sum += mat1[i][j] + mat2[i][j] + " "
    }
    allSum += sum + "\n"
}
console.log(allSum);


