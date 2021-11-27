// const MathChallenge = (num) => {

//     let arr = num.toString().split('').map(num => parseInt(num));

//     if (arr.length < 2) {
//         return "not possible"
//     }

//     return helperFunc(arr.slice(1), arr[0]);

//     function helperFunc(arr, sum) {
//         if (arr.length == 1) {
//             if (sum + arr[0] === 0) {
//                 return "+";
//             } else if (sum - arr[0] === 0) {
//                 return "-";
//             } else {
//                 return "not possible";
//             }
//         }

//         let tem2 = helperFunc(arr.slice(1), sum - arr[0]);
//         if (tem2 != "not possible") {
//             return "-" + tem2;
//         }

//         let tem1 = helperFunc(arr.slice(1), sum + arr[0]);
//         if (tem1 != "not possible") {
//             return "+" + tem1;
//         }

//         return "not possible";
//     }
// }

// console.log(MathChallenge(26712));













// function MultipleBrackets(str) {

//     var temp1 = 0;
//     var temp2 = 0;
//     var res1 = 0;
//     var res2 = 0;

//     for (var i = 0; i < str.length; i++) {

//         if (str[i] === "(") {
//             res1++;
//         }
//         if (str[i] === ")") {
//             res2++;
//         }
//         if (str[i] === "[") {
//             temp1++;
//         }
//         if (str[i] === "]") {
//             temp2++;
//         }
//     }

//     if (res1 === 0 && res2 === 0 && temp1 === 0 && temp2 === 0) {
//         return 1;
//     }
//     else if (res1 === res2 && temp1 === temp2) {
//         return 1;
//     }
//     else
//         return 0;

// }

// console.log(MultipleBrackets("(c(oder)) b(yte)"));




// function even(len) {
//     return !(len % 2);
// }

// function checkEvenPair(string) {
//     return string.match(/\d+/g).filter(s => s.length > 1).some(s =>[...s].some((c => v => even(v) && !--c)(2)));
// }


// function EvenPairs(str) {

//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (isNaN(str[i] % 2)) {
//             count = 0;
//         } else if (str[i] % 2 === 0) {
//             count++;
//         }

//         if (count === 2) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(EvenPairs('3gy41d216'));





// let temp;

// function helper(arr, len) {

//     if (len == 1) {
//         return 1;
//     }

//     let res = 1;
//     let flag = 1;

//     for (let i = 1; i < len; i++) {

//         res = helper(arr, i);

//         if (arr[i - 1] < arr[len - 1] && res + 1 > flag) {
//             flag = res + 1;
//         }
//     }

//     if (temp < flag) {
//         temp = flag;
//     }

//     return flag;

// }


// function ArrayChallenge(arr) {

//     let len = arr.length;
//     let temp = helper(arr, len);
//     return temp;

// }

// // keep this function call here 
// console.log(ArrayChallenge(readline()));

