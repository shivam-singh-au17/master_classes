var str1 = ['a', 'n', 'a', 'g', 'r', 'a', 'm'];
var str2 = ['n', 'a', 'g', ' ', 'a', ' ', 'r', 'a', 'm'];

function makeArr(str2) {
    var newStr2 = []
    for (var i = 0; i < str2.length; i++) {
        if (str2[i] != " ") {
            newStr2.push(str2[i])
        }
    }
    return newStr2;
}

function storeResult(arr) {
    var store = "";
    for (var i = 0; i < arr.length; i++){
        store += arr[i]
    }
    return store
}

function printResult(arr1, arr2) {
    if (arr1 == arr2) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

var newArr1 = makeArr(str2)
var newArr2 = makeArr(str1)

console.log(newArr1);
console.log(newArr2);


console.log(newArr1.sort());
console.log(newArr2.sort());














// function findAnagram(str1, str2) {

//     let mappedstr1 = {}, mappedstr2 = {};

//     for (let item of str1) {
//         mappedstr1[item] = (mappedstr1[item] || 0) + 1;
//     }

//     for (let item2 of str2) {
//         mappedstr2[item2] = (mappedstr2[item2] || 0) + 1;
//     }

//     for (let key in mappedstr1) {
//         if (!mappedstr2[key]) {
//             return 'False';
//         }

//         if (mappedstr1[key] !== mappedstr2[key]) {
//             return 'False';
//         }
//     }

//     return 'True';
// }


// function runProgram(input) {

//     var newInput = input.split("\n");
//     var newInput1 = newInput[0];
//     var newInput2 = newInput[1];

//     var strResult = findAnagram(newInput1, newInput2);
//     console.log(strResult);

// }
// if (process.env.USERNAME === "shiva") {
//     runProgram(`anagram
// nag a ram`);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//         read += input;
//     });
//     process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }