

function checkValidation(sudo, row, col, num) {

    let startRow = row - row % 3;
    let startCol = col - col % 3;

    for (let x = 0; x <= 8; x++) {
        if (sudo[x][col] == num) {
            return false;
        }
    }

    for (let x = 0; x <= 8; x++) {
        if (sudo[row][x] == num) {
            return false;
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudo[i + startRow][j + startCol] == num) {
                return false;
            }
        }
    }
    return true;
}


function ValidSuduko(sudo, row, col, N) {

    if (row == N - 1 && col == N) {
        return true;
    }

    if (col == N) {
        row++;
        col = 0;
    }

    if (sudo[row][col] != 0)
        return ValidSuduko(sudo, row, col + 1, N);

    for (let num = 1; num < 10; num++) {

        if (checkValidation(sudo, row, col, num)) {

            sudo[row][col] = num;

            if (ValidSuduko(sudo, row, col + 1, N))
                return true;
        }

        sudo[row][col] = 0;
    }
    return false;
}


function runProgram(input) {

    let Input = input.trim().split("\n");

    let sudoku = []
    for (let i = 0; i < Input.length; i++) {
        sudoku.push(Input[i].trim().split(" ").map(Number));
    }
    let N = Input.length;
    if (ValidSuduko(sudoku, 0, 0, N) == true) {
        for (let i = 0; i < N; i++) {
            let res = "";
            for (let j = 0; j < N; j++) {
                res += sudoku[i][j] + " ";
            }
            console.log(res);
        }
    }
    else {
        console.log("-1")
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`0 4 0 0 0 0 1 7 9
0 0 2 0 0 8 0 5 4
0 0 6 0 0 5 0 0 8
0 8 0 0 7 0 9 1 0
0 5 0 0 9 0 0 3 0
0 1 9 0 6 0 0 4 0
3 0 0 4 0 0 7 0 0
5 7 0 1 0 0 2 0 0
9 2 8 0 0 0 0 6 0`);
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

