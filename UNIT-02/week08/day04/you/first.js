
var mat = [
    [1]
    

]


var r = mat.length;
var c = mat[0].length;

var store = ""
for (var i = 0; i < r; i++) {
    store += mat[r - i - 1][0] + " "
}

for (var i = 1; i < r - 1; i++) {
    store += mat[i][i] + " "
}

for (var i = 0; i < r; i++) {
    store += mat[r - i - 1][r - 1] + " "
}

console.log('store:', store)