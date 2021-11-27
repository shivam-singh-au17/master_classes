function NQueensVariant(n) {
    const res = [];
    helperFun(res, n);
    return res.length;
};

function helperFun(res, n, board = [], r = 0) {
    if (r === n) {
        res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
        return;
    }
    for (let c = 0; c < n; c++) {
        if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
            board.push(c);
            helperFun(res, n, board, r + 1);
            board.pop();
        }
    }
}


function runProgram(input) {

    var num = Number(input);
    console.log(NQueensVariant(num));

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4`);
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