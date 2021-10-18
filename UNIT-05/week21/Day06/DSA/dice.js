
//  FIRST WAY SIMPLE RECURSION

/*

function findWay(num) {
    if (num == 0) {
        return 1;
    }
    if (num < 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    let ans = findWay(num - 1) + findWay(num - 2) + findWay(num - 3) + findWay(num - 4) + findWay(num - 5) + findWay(num - 6);
    return ans;
}

let num = 56;
console.log(findWay(num));

*/

//  DP WAY RESCURSION

function findWay(num, dpArr) {
    if (num == 0) {
        return 1;
    }
    if (num < 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    if (dpArr[num] != "t") {
        return dpArr[num];
    }

    let ans = findWay(num - 1, dpArr) + findWay(num - 2, dpArr) + findWay(num - 3, dpArr) + findWay(num - 4, dpArr) + findWay(num - 5, dpArr) + findWay(num - 6, dpArr);
    dpArr[num] = ans;
    return ans;
}

let dpArr = Array(10005).fill(0).map(() => "t");
let num = 156;
console.log(findWay(num, dpArr));