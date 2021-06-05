
function sortStr(str) {
    strArr = []
    for (var i = 0; i < str.length; i++) {
        strArr.push(str[i])
    }
    return strArr.sort()
}

function findFreq(strArr) {
    console.log(strArr);
    var temp = strArr[0];
    var count = 1;
    var result = 0;
    for (var i = 1; i < strArr.length; i++) {
        if (strArr[i] == temp) {
            count++;
        } else {
            result = Math.max(result, count);
            temp = strArr[i];
            count = 1;
        }
    }
    return result
}


function runProgram(input) {

    var Input = input;

    var sorting = sortStr(Input)
    var result = findFreq(sorting);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`acbcacbcbcacbcdcbcacb`);
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
