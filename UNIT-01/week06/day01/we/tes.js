// var str = 'shshivshi';
// for (var i = 0; i < str.length; i++) {
//     for (var j = i + 1; j < str.length; j++) {
//         var subStr = ""
//         for (var k = i; k <= j; k++) {
//             subStr += str[k]
//             if (subStr[0] == subStr[subStr.length - 1]) {
//                 console.log(subStr);
//             }
//         }
//     }
// }




var n = 14;
var count = 0;
for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
        count++
    }

}
if (count == 2) {
    console.log('yes');
} else {
    console.log('no');
}



// var str1 = [2, 3, 0, 8];
// var str2 = [4, 6, 3, 0];
// for (var i = 0; i < str1.length; i++) {
//     for (var j = 0; j < str2.length; j++) {
//         if (str1[i] == str2[j]) {
//             console.log(str1[i]);
//         }
//     }
// }




// var str = [2, 5, 1, 7, 4, 6];
// var count = 0
// var nums2 = []
// for (var i = 0; i < str.length; i++) {
//     var nums = []
//     for (var j = i + 1; j < str.length; j++) {
//         if (str[i] + str[j] == 11) {
//             nums.push(str[i], str[j])
//             // console.log(str[i]);
//             count++
//             nums2.push(nums)
//         }
//     }
// }
// console.log(nums2);
// console.log(count);

