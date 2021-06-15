// //  rotate arr left to right by k  

var arr = [1, 2, 5, 4, 0, 6];  // 0 6 1 2 5 4
var k = 9;
var n = arr.length;

if (k > n) {
    k = k % n;
    var rotateArr = []
    for (var i = 0; i < n; i++) {
        rotateArr.push(arr[(n + i - k + 2) % n])
    }
    console.log(rotateArr);
} else {
    var rotateArr = []
    for (var i = 0; i < n; i++) {
        rotateArr.push(arr[(n + i - k + 2) % n])
    }
    console.log(rotateArr);
}




// //  rotate arr right to left by k 

// var arr = [7, 1, 4, 2, 8];
// var k = 8;
// var n = arr.length;

// if (k > n) {
//     k = k % n;
//     var rotateArr = []
//     for (var i = 0; i < n; i++) {
//         rotateArr.push(arr[(n + i - k) % n])
//     }
//     console.log(rotateArr);
// } else {
//     var rotateArr = []
//     for (var i = 0; i < n; i++) {
//         rotateArr.push(arr[(n + i - k) % n])
//     }
//     console.log(rotateArr);
// }



// // longest odd repet count 

// // if same no comes many times 

// var res = 0;
// count = 1;
// var arr = [1, 2, 1, 1, 1, 2, 1, 4];

// for (var i = 0; i < arr.length - 1; i++) {
//     if (arr[i] % 2 == 1) {
//         if (arr[i] == arr[i+1]) {
//             count++;
//         } else {
//             res = Math.max(res, count)
//             count = 1
//         }
//     } 

// }
// console.log(res);



// if all no comes rendemly

// var res = 0;
// count = 0;
// var arr = [1, 2, 3, 7, 5];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         count++;
//         res = Math.max(res, count)
//     } else {
//         count = 0
//     }
// }
// console.log(res);






// two power 


// var n = 128;

// function isTwoPower(n) {
//     if (n == 0) {
//         return false
//     }
//     while (n != 1) {
//         if (n % 2 == 1) {
//             return false
//         }
//         n = n/2
//     }
//     return true

// }

// var result = isTwoPower(n);
// console.log(result);


// 2nd mathod by binary 

// var n = 12;

// function isTwoPower(n) {
//     if (n == 0) {
//         return false
//     }
//     if ((n & (n-1)) == 0) {
//         return true
//     } else {
//         return false
//     }

// }

// var result = isTwoPower(n);
// console.log(result);