var data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


for (var i = 0; i < data[0].length; i++) {
    var sum = 0;
    for (var j = 0; j < data.length; j++) {
        sum += data[j][i];
    }
    console.log(sum);
}
