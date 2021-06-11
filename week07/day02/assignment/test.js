
var arr2D = [
    ['x', 'o', 'o'],
    ['o', 'o', 'x'],
    ['x', 'o', 'x']
]


var row = arr2D.length
var col = arr2D[0].length




function findWineer(arr2D, row, col) {

    var count1o = 0
    var count1x = 0
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (i == col - j - 1) {
                if (arr2D[i][j] == 'o') {
                    count1o++;
                } else if (arr2D[i][j] == 'x') {
                    count1x++;
                }
            }
        }
    }

    var countdigo = 0
    var countdigx = 0
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (i == j) {
                if (arr2D[i][j] == 'o') {
                    countdigo++;
                } else if (arr2D[i][j] == 'x') {
                    countdigx++;
                }
            }
        }
    }



    var count3o = 0
    var count3x = 0
    var strArr = []
    for (var i = 0; i < row; i++) {
        var res = "";
        for (var j = 0; j < col; j++) {
            res += arr2D[i][j]
        }
        strArr.push(res)
    }

    for (var k = 0; k < strArr.length; k++) {
        if (strArr[k] == 'ooo') {
            count3o++;
        } else if (strArr[k] == 'xxx') {
            count3x++;
        }
    }


    var count3lo = 0
    var countl3x = 0
    var strArr = []
    for (var j = 0; j < col; j++) {
        var res = "";
        for (var i = 0; i < row; i++) {
            res += arr2D[i][j]
        }
        strArr.push(res)
    }

    for (var k = 0; k < strArr.length; k++) {
        if (strArr[k] == 'ooo') {
            count3lo++;
        } else if (strArr[k] == 'xxx') {
            countl3x++;
        }
    }



    if (count3o == 1 || count1o == 3 || countdigo == 3 || count3lo == 1) {
        return 'o'
    } else if (count3x == 1 || count1x == 3 || countdigx == 3 || countl3x == 1) {
        return 'x'
    } else {
        return 'Tie'
    }
}

var ans = findWineer(arr2D, row, col);

console.log(ans);






