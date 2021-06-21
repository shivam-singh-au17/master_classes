function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var inp = input[0].trim().split(" ").map(Number)
    var row = inp[0]
    var col = inp[1]

    var mat = [];
    for (var i = 1; i <= row; i++) {
        mat.push(input[i].trim().split(' ').map(Number))
    }

    var count = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (prime(mat[i][j])) {
                count++;
            }
        }
    }
    console.log(count)

    function prime(num) {
        var prime = true;
        for (var i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
        if (num > 1 && prime) {
            return true;
        }
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 3
1 2 3
4 5 6
7 8 9`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
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

