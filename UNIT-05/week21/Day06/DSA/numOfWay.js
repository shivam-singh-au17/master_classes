
// NORMAL WAY 

/*

function numOfWay(initState, num) {
    if (initState > num) {
        return 0;
    }
    if (initState == num) {
        return 1;
    }
    let ans = numOfWay((initState + 1), num) + numOfWay((initState + 2), num);
    return ans;
}

let num = 40;
let initState = 0;
let res = numOfWay(initState, num);
console.log('res:', res)

*/


// DP WAY 

// /*

function numOfWay(initState, num) {
    if (initState > num) {
        return 0;
    }
    if (initState == num) {
        return 1;
    }
    if (dpArr[initState] != "t") {
        return dpArr[initState];
    }
    let ans = numOfWay((initState + 1), num, dpArr) + numOfWay((initState + 2), num, dpArr);
    dpArr[initState] = ans;
    return ans;
}

let dpArr = Array(10005).fill(0).map(() => "t");
let num = 4;
let initState = 0;
let res = numOfWay(initState, num, dpArr);
console.log('res:', res)


// */