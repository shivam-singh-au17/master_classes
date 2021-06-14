
function makeArr(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            res.push(str[i])
        }
    }
    return res;
}


function sortArr(arr) {
    arr.sort();
    return arr;
}


function makeStr(arr) {
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    return res;
}


function checkAnagram(str1, str2) {
    if (str1 == str2) {
        return "True";
    } else {
        return "False";
    }
}


function runProgram(input) {

    var newInput = input.split("\n");
    var newInput1 = newInput[0];
    var newInput2 = newInput[1];

    var strArr1 = makeArr(newInput1);
    var strArr2 = makeArr(newInput2);

    var sortArr1 = sortArr(strArr1);
    var sortArr2 = sortArr(strArr2);

    var inStr1 = makeStr(sortArr1);
    var inStr2 = makeStr(sortArr2);

    var result = checkAnagram(inStr1, inStr2);
    console.log(result);
 

}
if (process.env.USERNAME === "shiva") {
    runProgram(`anagram
nag a ram`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}