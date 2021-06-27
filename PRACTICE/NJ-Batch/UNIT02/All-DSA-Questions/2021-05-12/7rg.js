function runProgram(input) {
    var input = input.split("\n");
    var t = input[0].split(" ").map(Number);
    var line = 1;
    for (let i = 0; i < t; i++) {
        [r, c] = input[line].split(" ").map(Number);
        line++;
        var mat = []
        for (let j = 0; j < r; j++) {
            mat.push(input[line].trim().split(" ").map(Number));
            line++;
        }
        var GlobalObject = {}
        for (let i = 0; i < r; i++) {
            var object = {}
            for (let j = 0; j < c; j++) {
                var key = mat[i][j];
                if (object[key] == undefined) {
                    object[key] = 1
                }
                else {
                    var prev = object[key]
                    object[key] = prev + 1
                }

            }

            for (key1 in object) {
                if (GlobalObject[key1] == undefined) {
                    GlobalObject[key1] = 1;
                }
                else {
                    var prev1 = GlobalObject[key1]
                    GlobalObject[key1] = prev1 + 1
                }

            }

        }
        var count = 0;
        for (const key3 in GlobalObject) {
            if (GlobalObject[key3] == r) {
                count++;
            }


        }
        console.log(count);
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