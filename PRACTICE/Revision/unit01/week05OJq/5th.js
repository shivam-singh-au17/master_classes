
var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



var row = mat.length;
var col = mat[0].length;

var subMat = [];
for (var i = 0; i < row - 1 ; i++) {
    var subMatEle = [];
    for (var j = 0; j < col - 1; j++) {
        subMatEle.push(mat[i][j]);
    }
    subMat.push(subMatEle);
}
console.log(subMat);
