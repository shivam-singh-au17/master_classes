var data = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];

var row = data.length;
var col = data[0].length


var sum = 0;
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
        if (i <= j) {
            sum += data[i][j]
        }
    }
}

console.log(sum);


