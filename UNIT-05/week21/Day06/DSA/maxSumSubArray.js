
/*

//  USING O^3 TIME

function findSubArr(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let subArr = [];
            for (let k = i; k < j + 1; k++) {
                subArr.push(arr[k])
            }
            console.log(subArr);
        }
    }
}

let arr = [2, 5, 8];
findSubArr(arr)


*/



/*

//  USING O^2 TIME

function findSubArr(arr) {

    for (let i = 0; i < arr.length; i++) {
        let subArr = [];
        for (let j = i; j < arr.length; j++) {
            subArr.push(arr[j])
            console.log(subArr);
        }
    }
}

let arr = [2, 5, 8];
findSubArr(arr)


*/



/*

//  USING O^3 TIME

function findMaxSumSubArr(arr) {

    let maxSum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0;
            for (let k = i; k < j + 1; k++) {
                sum += arr[k]
            }
            maxSum = Math.max(sum, maxSum);
        }
    }
    return maxSum;
}

let arr = [2, 5, 8];
let res = findMaxSumSubArr(arr)
console.log('res:', res)


*/



/*

//  USING O^2 TIME

function findMaxSumSubArr(arr) {

    let maxSum = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            maxSum = Math.max(sum, maxSum);
        }
    }
    return maxSum;
}

let arr = [-2, 5, 8, -5];
let res = findMaxSumSubArr(arr)
console.log('res:', res)


*/




function findMaxSumSubArr(arr) {
    let curSum = arr[0];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        curSum = Math.max((curSum + arr[i]), arr[i]);
        maxSum = Math.max(curSum, maxSum)

    }
    return maxSum;
}

let arr = [-2, 5, 8, -5];
let res = findMaxSumSubArr(arr)
console.log('res:', res)

