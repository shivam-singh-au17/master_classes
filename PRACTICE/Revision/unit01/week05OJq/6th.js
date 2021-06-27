// Print Submatrix

var mat = [
    [1, 2, 3],
    [4, 5, 6]
];



var row = mat.length;
var col = mat[0].length;

var subMat = [];
for (var i = 0; i < col; i++) {
    var subMatEle = [];
    for (var j = 0; j < row; j++) {
        subMatEle.push(mat[j][i]);
    }
    subMat.push(subMatEle);
}
console.log(subMat);