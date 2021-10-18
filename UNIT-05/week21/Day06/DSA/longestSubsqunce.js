
//  NORMAL WAY 

/*

function findLongesty(str1, str2, idx1, idx2) {

    if (idx1 >= str1.length || idx2 >= str2.length) {
        return 0;
    }

    if (str1[idx1] == str2[idx2]) {
        return 1 + findLongesty(str1, str2, idx1 + 1, idx2 + 1);
    }
    else {
        return Math.max(findLongesty(str1, str2, idx1 + 1, idx2), findLongesty(str1, str2, idx1, idx2 + 1))
    }
}


let str1 = "SHIVAMSJFGKJRTYSDFHGF";
let str2 = "SOVAMDFLJGHJKGGH";
let idx1 = 0;
let idx2 = 0;
let res = findLongesty(str1, str2, idx1, idx2);
console.log('res:', res);

*/


//  DP  WAY 

function findLongesty(str1, str2, idx1, idx2, dpArr) {

    if (idx1 >= str1.length || idx2 >= str2.length) {
        return 0;
    }

    if (dpArr[idx1][idx2] != "t") {
        return dpArr[idx1][idx2];
    }
    let ans = 0
    if (str1[idx1] == str2[idx2]) {
        ans = 1 + findLongesty(str1, str2, idx1 + 1, idx2 + 1, dpArr);
    }
    else {
        ans = Math.max(findLongesty(str1, str2, idx1 + 1, idx2, dpArr), findLongesty(str1, str2, idx1, idx2 + 1, dpArr))
    }
    dpArr[idx1][idx2] = ans;
    return ans;
}

var dpArr = Array.from(Array(100), () => Array(100).fill("t"));
let str1 = "SHIVAMSJFGKJRTYSDFHGDFGHTIYGYFHBGRFGJEFJHFF";
let str2 = "SOVAMDFLJGHJKGGHDSFJGHKJGKFBRGBGJGFBFDSFGJH";
let idx1 = 0;
let idx2 = 0;
let res = findLongesty(str1, str2, idx1, idx2, dpArr);
console.log('res:', res);


