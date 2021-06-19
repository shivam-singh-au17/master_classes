var data = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];

var row = data.length;
var col = data[0].length

var subMatrix = [];
for (var i = 0; i < row - 1; i++) {
    var sub2mat = []
    for (var j = 0; j < col - 1; j++) {
        sub2mat.push(data[i][j]);
    }
    subMatrix.push(sub2mat)
}
console.log(subMatrix);

