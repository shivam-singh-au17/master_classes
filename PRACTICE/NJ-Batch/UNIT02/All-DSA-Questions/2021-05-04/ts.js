function runProgram(input) {
    var input = input.split("\n");
    var t = input[0].split(" ").map(Number);
    for (let a = 0; a < t; a++) {
        var length = input[2 * a + 1].split(" ").map(Number);
        var n = length[0];
        var k = length[1];
        var array = input[2 * a + 2].split(" ").map(Number);
        var flag = true;
        for (let i = 0; i < n; i++) {
            var res = ""

            for (let j = i + 1; j < n; j++) {

                if (array[i] + array[j] == k) {
                    console.log(i, j);
                    flag = false;
                    break;
                }
            }
            if (!flag) {
                break;
            }
        }
        if (flag) {
            console.log(-1, -1);
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