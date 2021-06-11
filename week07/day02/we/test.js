

// 1                  |
//      <---------


// var mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 9, 8, 7],
//     [6, 5, 4, 3]
// ]

// var row = mat.length;
// var col = mat[0].length;

// for (var i = row - 1; i >= 0; i--) {
//     for (var j = col - 1; j >= 0 ; j--) {
//         console.log(mat[i][j]);
//     }
// }




// 1
//       ^
//       |
//       |
//   ____|


// var mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 9, 8, 7],
//     [6, 5, 4, 3]
// ]

// var row = mat.length;
// var col = mat[0].length;

// for (var i = row - 1; i >= 0; i--) {
//     for (var j = col - 1; j >= 0 ; j--) {
//         console.log(mat[j][i]);
//     }
// }








// 3
// ------->


// var mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 9, 8, 7],
//     [6, 5, 4, 3]
// ]

// var row = mat.length;
// var col = mat[0].length;

// for (var i = row - 1; i >= 0; i--) {
//     for (var j = 0; j < col; j++) {
//         console.log(mat[i][j]);
//     }
// }






// 1
//       |
//       |
//       |
//       *

// var mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 9, 8, 7],
//     [6, 5, 4, 3]
// ]

// var row = mat.length;
// var col = mat[0].length;

// for (var i = row - 1; i >= 0; i--) {
//     for (var j = 0; j < col; j++) {
//         console.log(mat[j][i]);
//     }
// }






// 1
//       ^
//       |
//       |
//       |____


// var mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 9, 8, 7],
//     [6, 5, 4, 3]
// ]

// var row = mat.length;
// var col = mat[0].length;

// for (var j = 0; j < col; j++) {
//     for (var i = row - 1; i >= 0; i--) {
//         console.log(mat[i][j]);
//     }
// }








// var mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 9, 8, 7],
//     [6, 5, 4, 3]
// ]

// var row = mat.length;
// var col = mat[0].length;



// for (var i = 0; i < row; i++) {
//     if (i % 2 == 0) {
//         for (var j = col - 1; j >= 0; j--) {
//             console.log(mat[i][j]);
//         }
//     } else {
//         for (var j = 0; j < col; j++) {
//             console.log(mat[i][j]);
//         }

//     }
// }





// var mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 9, 8, 7],
//     [6, 5, 4, 3]
// ]

// var row = mat.length;
// var col = mat[0].length;

// for (var i = 0; i < row; i++) {
// for (var j = col - 1; j >= 0; j--) {
//         console.log(mat[i][j]);
//     }
// }






// var mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 9, 8, 7],
//     [6, 5, 4, 3]
// ]

// var row = mat.length;
// var col = mat[0].length;

// for (var i = 0; i < row; i++) {
//     for (var j = 0; j < col; j++) {
//         console.log(mat[i][j]);
//     }
// }








var mat = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]

]

var row = mat.length;
var col = mat[0].length;

var target = 13;

// for (var i = 0; i < row; i++) {
//     for (var j = 0; j < col; j++) {
//         if (i == col - j -1) {
            
//             console.log(mat[i][j]);
//         }
//     }
// }



var k = row - 1
var resw = ""
while (k >= (-row - 1)) {
    var store = [];
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (i - k == j) {
                store.push(mat[i][j]) + " ";
            }
        }
    }
    for (var t = 0; t < store.length; t++) {
        if (store[t] == target) {
            resw += store
        }
    }
    k--
}
console.log(makeStr(resw));



var k = (-col - 1)
var resw = ""
while (k <= 1) {
    var store = [];
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (i == col - j + k) {
                store.push(mat[i][j]) + " ";
            }
        }
    }
    for (var t = 0; t < store.length; t++) {
        if (store[t] == target) {
            resw += store
        }
    }
    k++
}
console.log(makeStr(resw));


function makeStr(str) {
    var newStr = str.trim().split(",");
    var strStore = ""
    for (var i = 0; i < newStr.length; i++){
        strStore += newStr[i] + " "
    }
    return strStore;
}







// var k = row - 1
// var resw = ""
// while (k >= (-row - 1)) {
//     var store = "";
//     for (var i = 0; i < row; i++) {
//         for (var j = 0; j < col; j++) {
//             if (i - k == j) {
//                 store += (mat[i][j]) + " ";
//             }
//         }
//     }
//     for (var t = 0; t < store.length; t++) {
//         if (store[t] == 6) {
//             resw += store
//         }
//     }
//     k--
// }
// console.log(resw);



// var k = (-row - 1)
// var resw = ""
// while (k <= 1) {
//     var store = "";
//     for (var i = 0; i < row; i++) {
//         for (var j = 0; j < col; j++) {
//             if (i == row - j + k) {
//                 store += (mat[i][j]) + " ";
//             }
//         }
//     }
//     for (var t = 0; t < store.length; t++){
//         if (store[t] == 6) {
//             resw += store
//         }
//     }
//     k++
// }
// console.log(resw);





