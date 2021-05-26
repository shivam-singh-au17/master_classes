var data1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


var data2 = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
];



var arr1 = [];
for (var i = 0; i < data1.length; i++) {
    for (var j = 0; j < data1.length; j++) {
        arr1.push(data1[i][j]);
    }
}

var arr2 = [];
for (var k = 0; k < data2.length; k++) {
    for (var t = 0; t < data2.length; t++) {
        arr2.push(data2[k][t]);
    }
}


for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (i == j) {
            var arr1Arr2Sum = arr1[i] + arr2[j]
            console.log(arr1Arr2Sum);
        }
    }
}



