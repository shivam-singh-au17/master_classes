
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
    for (var i = 0; i < arr.length; i++) {
        store += arr[i]
    }
    return store
}

function printResult(arr1, arr2) {
    if (arr1 == arr2) {
        return 'Yes'
    } else {
        return 'No'
    }
}


function runProgram(input) {

    var newInput = input.split("\n");

    var input1 = newInput[0].split("");
    var input2 = newInput[1].split("");

    var ans1 = makeArr(input1);
    var ans2 = makeArr(input2);
    console.log(ans1);
    console.log(ans2);

    var ans11 = storeResult(ans1);
    var ans22 = storeResult(ans2);
    console.log(ans11);
    console.log(ans22);

    var result = printResult(ans11, ans22);
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