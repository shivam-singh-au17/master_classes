var arr = [
    1, 2, 3, 4,
    5, 6, 7, 8
]

var layer = 2;
var row = 2;
var col = 2;


var line = 0;
for (var i = 0; i < layer; i++) {
    for (var j = 0; j < row; j++) {
        var res = "";
        for (var k = 0; k < col; k++) {
            res += arr[line] + " "
            line++;
        }
        console.log(res);
    }
}
