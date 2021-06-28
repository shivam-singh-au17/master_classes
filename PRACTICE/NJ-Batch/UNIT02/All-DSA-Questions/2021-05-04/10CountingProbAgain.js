
function CountingProbAgain(str) {

    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var key = str[i];
        if (obj[key] == undefined) {
            obj[key] = 1
        } else {
            var prev_count = obj[key];
            obj[key] = prev_count + 1
        }
    }
    var myStr = []
    for (key in obj) {
        myStr.push(key)
    }
    var sortStr = myStr.sort()
    for (var i = 0; i < sortStr.length; i++) {
        for (key in obj) {
            if (sortStr[i] == key) {
                console.log(key + " " + obj[key]);
            }
        }
    }
}

function runProgram(input) {

    CountingProbAgain(input);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`masaischool`);
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









// 2nd mathod

function runProgram(input) {
    var input = input.split("\n");
    var str = input[0].split("");
    var a = str.sort()
    var object = {};
    for (let i = 0; i < str.length; i++) {

        var key = a[i];
        if (object[key] == undefined) {
            object[key] = 1;
        }
        else {
            var pre = object[key];
            object[key] = pre + 1
        }

    }
    for (const key in object) {
        console.log(`${key} ${object[key]}`);
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