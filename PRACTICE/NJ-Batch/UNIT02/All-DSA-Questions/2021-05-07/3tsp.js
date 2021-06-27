function runProgram(input) {
    var input = input.split("\n");
    var str1 = input[0].split("");
    var str2 = input[1].split("");
    var newStr1 = str1.sort();
    var newStr2 = str2.sort();
    var object = {}
    var object2 = {}
    for (let i = 0; i < newStr1.length; i++) {
        var key = newStr1[i]
        if (object[key] == undefined) {
            object[key] = 1;
        }
        else {
            var prev = object[key]
            object[key] = prev + 1
        }
        var key2 = newStr2[i]
        if (object2[key2] == undefined) {
            object2[key2] = 1;
        }
        else {
            var prev2 = object[key2]
            object2[key2] = prev2 + 1
        }

    }
    var res = "";
    var res1 = "";
    for (const key in object) {
        res += key;
    }
    for (const key in object2) {
        res1 += key;
    }
    if (res == res1) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});