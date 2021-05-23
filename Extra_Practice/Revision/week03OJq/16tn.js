
function halfStr1st(string) {
    var res = "";
    for (var i = (Math.floor(string.length / 2) - 1); i >= 0; i--) {
        res += string[i]
    }
    return res;
}

function midStr2nd(string) {
    var res = "";
    for (var i = Math.floor(string.length / 2); i < Math.floor(string.length / 2) + 1; i++) {
        res += string[i]
    }
    return res;
}

function halfStr2nd(string) {
    var res = "";
    for (var i = string.length - 1; i >= Math.floor(string.length / 2); i--) {
        res += string[i]
    }
    return res;
}

function halfStr2nd2(string) {
    var res = "";
    for (var i = string.length - 1; i >= Math.floor(string.length / 2) + 1; i--) {
        res += string[i]
    }
    return res;
}

function printResult(str, str1, str3, str2, str4) {
    if (str.length % 2 == 1) {
        return str1 + str3 + str4;
    } else {
        return str1 + str2;
    }
}

function runProgram(input) {

    var newInput = input;

    var ans1 = halfStr1st(newInput);
    var ans3 = midStr2nd(newInput);
    var ans2 = halfStr2nd(newInput);
    var ans4 = halfStr2nd2(newInput);
    var ans4 = printResult(newInput, ans1, ans3, ans2, ans4);
    console.log(ans4);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`jsdfn`);
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

