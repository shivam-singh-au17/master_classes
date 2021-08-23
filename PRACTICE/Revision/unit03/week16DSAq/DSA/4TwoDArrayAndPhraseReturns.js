
function findmatch(mat, str, x, y, row, col, level) {

    let l = str.length;
    
    if (level == l) {
        return true;
    }

    if (x < 0 || y < 0 || x >= row || y >= col) {
        return false;
    }

    if (mat[x][y] == str[level]) {

        let temp = mat[x][y];
        mat[x][y] = '#';

        let res =
            findmatch(mat, str, x - 1, y, row, col, level + 1) |
            findmatch(mat, str, x - 1, y - 1, row, col, level + 1) |
            findmatch(mat, str, x + 1, y, row, col, level + 1) |
            findmatch(mat, str, x + 1, y + 1, row, col, level + 1) |
            findmatch(mat, str, x, y - 1, row, col, level + 1) |
            findmatch(mat, str, x + 1, y - 1, row, col, level + 1) |
            findmatch(mat, str, x - 1, y + 1, row, col, level + 1) |
            findmatch(mat, str, x, y + 1, row, col, level + 1);

        mat[x][y] = temp;
        return res;
    }
    else {
        return false;
    }
}

function checkMatch(mat, str, row, col) {

    let l = str.length;

    if (l > row * col) {
        return false;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (mat[i][j] == str[0]) {
                if (findmatch(mat, str, i, j, row, col, 0)) {
                    return true;
                }
            }
        }
    }
    return false;

}


function runProgram(input) {

    let Input = input.trim().split("\n");
    let RandC = Input[0].trim().split(" ").map(Number);
    let row = RandC[0];
    let col = RandC[1];

    let grid = []
    for (let i = 1; i <= row; i++) {
        grid.push(Input[i].trim().split(" "));
    }
    if (checkMatch(grid, "masaischool", row, col))
        console.log("YES");
    else
        console.log("NO");
    
}

if (process.env.USERNAME === "shiva") {
    runProgram(`7 6
l l s c s d
h b s h l m
i l h c c m
m l d a b l
a s d b c o
o o a c s o
l c d i c h`);
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

