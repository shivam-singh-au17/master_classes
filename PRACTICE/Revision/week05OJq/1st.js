
var mat = [
    [1, 2, 1],
    [2, 1, 2]
];

var row = mat.length;
var col = mat[0].length;

var sum = 0;
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
        sum += mat[i][j];
    }
}
console.log(sum);