var data = [
    [1, 2, 3, 4],
    [5, 6, 7, 6],
    [7, 8, 9, 9],
    [2, 4, 1, 3]
];

var row = data.length;
var col = data[0].length

var firstDiago = 0;
var secondDiago = 0;

for (var i = 0; i < row; i++) {
    firstDiago += (data[i][(row - i) - 1]);
    for (var j = 0; j < col; j++) {
        if (i == j) {
            secondDiago += (data[i][j]);
        }
    }
}

var diff = secondDiago - firstDiago;
console.log(diff);


