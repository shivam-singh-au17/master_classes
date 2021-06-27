function runProgram(input) {
    var input = input.split("\n");
    var n = input[0].split(" ").map(Number);
    var str = input[1].split("");
    var a = str.sort()
    var object = {};
    for (let i = 0; i < n; i++) {

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
        console.log(`${key}-${object[key]}`);
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
});//Enter code here