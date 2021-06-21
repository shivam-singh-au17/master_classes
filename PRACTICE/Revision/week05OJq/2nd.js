var mat = [
    [1, 2, 1],
    [2, 1, 2]
];

var row = mat.length;
var col = mat[0].length;

for (var i = 0; i < col; i++) {
    var sum = 0;
    for (var j = 0; j < row; j++) {
        sum += mat[j][i];
    }
    console.log(sum);
}


