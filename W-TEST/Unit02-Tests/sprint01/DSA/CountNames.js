
function CountNames(arr) {
    arr.sort()
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        if (obj[key] == undefined) {
            obj[key] = 1;
        } else {
            prev_count = obj[key];
            obj[key] = prev_count + 1;
        }
    }
    for (key in obj) {
        console.log(key, obj[key]);
    }
}

function runProgram(input) {

    var input = input.split("\n");

    var testCases = Number(input[0]);
    var arr = [];
    for (var i = 1; i <= testCases; i++) {
        arr.push(input[i])
    }

    CountNames(arr);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
school
masai
masai`);
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
