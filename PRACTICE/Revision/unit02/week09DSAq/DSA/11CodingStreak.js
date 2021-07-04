
function sumArrStr(str) {
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        temp += str[i]
    }
    return temp;
}

function countCodingIn_1_Days(str) {
    var count = 1;
    var temp = str[0]
    var res = 0
    for (var i = 1; i <= str.length; i++) {
        if (str[i] == temp && str[i] == 'C') {
            count++
        } else {
            res = Math.max(res, count);
            count = 1;
            temp = str[i]
        }
    }
    return res;
}

function maxCodingCount(strArr) {
    var nDaysCoding = countCodingIn_1_Days(sumArrStr(strArr))
    var oneDayCoding = 0
    for (var i = 0; i < strArr.length; i++){
        oneDayCoding = Math.max(countCodingIn_1_Days(strArr[i]), oneDayCoding);
    }
    console.log(oneDayCoding, nDaysCoding);
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    var strArr = []
    for (var i = 1; i <= testCases; i++) {
        strArr.push(Input[i]);
    }
    maxCodingCount(strArr)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
SSSSEEEECCCCEECCCC
CCCCCSSSSEEECCCCSS
SSSSSEEESSCCCCCCCS
EESSSSCCCCCCSSEEEE`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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