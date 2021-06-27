function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    for (let a = 0; a < t; a++) {
        var length = input[2 * a + 1].split(" ").map(Number);
        var array = input[2 * a + 2];
        var object = {};
        for (let i = 0; i < array.length; i++) {
            var key = array[i];
            if (object[key] == undefined) {
                object[key] = 1;
            }
            else {
                var prev_object = object[key];
                object[key] = prev_object + 1;
            }
        }
        var k = 0;
        var flag = 0;
        for (const key in object) {
            if (object[key] % 2 == 0) {
                flag = 1;
            }
            else if (object[key] % 2 != 0 && k == 0) {
                flag = 1;
                k++;
            }
            else if (object[key] % 2 != 0 && k != 0) {
                flag = 0;
                break;

            }
        }
        if (flag == 1) {
            console.log("Possible!");
        }
        else {
            console.log("Not Possible!");
        }
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