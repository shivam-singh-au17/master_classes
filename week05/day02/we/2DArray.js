var data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var sum = 0;

for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
        sum += data[i][j];
    }
}

console.log(sum);





























// first diagonal

// var diagonal = []
// for (var i = 0; i < data.length; i++) {
//     for (var j = 0; j < data.length; j++) {
//         if (i == j) {
//             diagonal.push(data[i][j])
//         }
//     }
// }
// console.log(diagonal);


// second diagonal

// var diagonal = []
// for (var i = 0; i < data.length; i++) {
//     for (var j = 0; j < data.length; j++) {
//         if (i == j) {
//             diagonal.push(data[i][j])
//         }
//     }
// }
// console.log(diagonal);

