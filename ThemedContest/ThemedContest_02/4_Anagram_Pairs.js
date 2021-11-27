

function strSort(str) {
    return str.split("").sort().join("")
}

function AnagramPairs(strArr) {

    let obj = {};
    for (let i = 0; i < strArr.length; i++) {
        let key = strSort(strArr[i]);
        if (obj[key] == undefined) {
            obj[key] = 1;
        } else {
            prev_obj = obj[key];
            obj[key] = prev_obj + 1;
        }
    }

    let sum = 0;
    for (let i in obj) {
        let value = obj[i];
        sum += (value * (value - 1)) / 2;
    }
    console.log(sum)

}


function runProgram(input) {

    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);

    let temp = 1
    for (let i = 1; i <= testCases; i++) {
        let strArr = [];
        let len = Number(newInput[temp]);

        for (let j = 1; j <= len; j++) {
            strArr.push(newInput[temp + j]);
        }
        AnagramPairs(strArr)

        temp += len + 1;
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
5
aaaaabbbbb
baabbbbaaa
aaaabbbbba
xxxxxxxxxy
yxxxxxxxxx
2
abcdefghij
jighdefabc`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\len$/, "");
        read = read.replace(/\len$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\len$/, "");
        runProgram(read);
        process.exit(0);
    });
}

