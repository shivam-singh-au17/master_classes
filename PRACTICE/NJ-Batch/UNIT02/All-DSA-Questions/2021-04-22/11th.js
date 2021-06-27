function runProgram(input) {
    var input = input.split("\n");

    var n = input[0].split(" ").map(Number);
    var arr = [];
    for (let a = 1; a <= n; a++) {
        arr.push(input[a])

    }
    var new_object = {};
    for (let i = 0; i < arr.length; i++) {
        var key = arr[i];

        if (new_object[key] == undefined) {
            new_object[key] = 1;
        }
        else {
            var preCount = new_object[key];
            new_object[key] = preCount + 1
        }
    }
    var res = "";
    var max = 0;
    for (const key in new_object) {
        if (new_object[key] > max) {
            max = new_object[key];
            res = key;


        }

    }
    console.log(res);

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