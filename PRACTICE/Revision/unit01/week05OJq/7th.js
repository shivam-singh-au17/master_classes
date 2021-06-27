
var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [0, 8, 9]
];



var row = mat.length;
var col = mat[0].length;

var firstDigno = 0;
var secondDigno = 0;
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
        if (i == j) {
            firstDigno += mat[i][j];
        }
        if (i == row - j - 1) {
            secondDigno += mat[i][j];
        }
    }

}
var diff = firstDigno - secondDigno;
console.log(diff);
