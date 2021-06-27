function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var line = 1;
    for (let i = 0; i < t; i++) {
        r = input[line].split(" ").map(Number);
        line++;
        var mat = [];
        for (let j = 0; j < r; j++) {
            mat.push(input[line].split(" ").map(Number))
            line++;

        }
        var arr = []
        for (let i = 0; i < r; i++) {

            for (let j = 0; j < r; j++) {

                if (i + j == r - 1 || i == j) {
                    arr.push(mat[i][j])
                }

            }
        }
        var newArr = arr.sort(function (a, b) {
            return a - b;
        })
        var temp = newArr[0];
        var count = 0;
        for (let k = 0; k < newArr.length; k++) {
            if (newArr[k] == temp) {
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