
function runingSum(arr) {
    let runingNum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        runingNum.push(runingNum[i - 1] + arr[i]);
    }
    return runingNum;
}

let arr = [0, 1, 2, 3, 4, 5, 6]
let runingArr = runingSum(arr);
console.log(runingArr);

let start = 4;
let end = 5;
console.log(runingArr[end] - runingArr[start - 1]);