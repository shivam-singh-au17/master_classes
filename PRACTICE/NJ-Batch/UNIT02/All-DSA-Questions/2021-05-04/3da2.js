function runProgram(input) {
    var input = input.split("\n");
    var [q, r, c] = input[0].split(" ").map(Number);
    var array = input[1].split(" ").map(Number);
    var line = 0;
    var arr1 = [];
    for (let i = 0; i < q; i++) {
        var arr2 = []
        for (let j = 0; j < r; j++) {
            var arr3 = [];
            for (let k = 0; k < c; k++) {
                arr3.push(array[line]);
                line++
            }
            arr2.push(arr3);
        }
        arr1.push(arr2);
    }

    for (let i = q - 1; i >= 0; i--) {

        for (let j = 0; j < r; j++) {
            var res = ""
            for (let k = 0; k < c; k++) {
                res += arr1[i][j][k] + " ";

            }
            console.log(res);
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