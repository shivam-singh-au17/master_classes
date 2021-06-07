var mat = [
    [1, 2, 1],
    [2, 1, 2],
    [1, 2, 1]
];



var row = mat.length;
var col = mat[0].length;

var allSum = 0
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
        if (i <= j) {
            allSum += mat[i][j]
        }
    }
}
console.log(allSum);

