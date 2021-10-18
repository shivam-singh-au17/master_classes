
// Simple Recursion 

/*

function findDp(n) {

    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return findDp(n - 1) + findDp(n - 2);
    
}

let n = 42;
let ans = findDp(n);
console.log(ans);


*/




// Using DP

// /*


function findDp(n, dpArr) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    if (dpArr[n] != "t") {
        return dpArr[n];
    }
    res = findDp(n - 1, dpArr) + findDp(n - 2, dpArr);
    dpArr[n] = res;
    return res;
}

let dpArr = Array(1000005).fill(0).map(() => "t");
let n = 10;
let ans = findDp(n, dpArr);
console.log(ans);


// */

