var data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 2, 3]
];

var row = data.length;
var col = data[0].length


var firstMat = [];
for (var i = 0; i < col; i++) {
    var secMat = [];
    for (var j = 0; j < row; j++) {
        secMat.push(data[j][i]);
    }
    firstMat.push(secMat)
}
console.log(firstMat);


