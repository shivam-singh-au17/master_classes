
function AnagramDetector(string) {
    var ans = [];
    for (var i = 0; i < string.length; i++) {
        var result = "";
        for (var k = i; k < string.length; k++) {
            result += string[k];
            ans.push(result)
        }
    }
    return ans

}

function printResult(ans, items2) {
    var flag = false;
    for (var i = 0; i < ans.length; i++) {
        for (var j = 0; j < items2.length; j++) {
           if (ans[i] == items2[j]) {
               flag = true;
           }
        }
    }
    return flag
}

function printTrueFalse(flag) {
    if (flag == true) {
        console.log("True");
    } else {
        console.log("False");
    }
}

function runProgram(input) {

    var newInput = input.split("\n");
    var newInput1 = newInput[0];
    var newInput2 = newInput[1].split(" ");

    var strResult = AnagramDetector(newInput1);
    var answ = printResult(strResult, newInput2);
    printTrueFalse(answ)
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