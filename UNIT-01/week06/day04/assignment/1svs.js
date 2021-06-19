
function isValidSudoku(Sudoku) {

    var row = [];
    var column = [];
    var box = [];

    for (var i = 0; i < Sudoku.length; i++) {
        var brx = ((i - (i % 3)) / 3);
        if (row[i] === undefined) {
            row.push([]);
        }
        if (box[brx] === undefined) {
            box.push([]);
        }
        for (var j = 0; j < Sudoku.length; j++) {
            var crx = ((j - (j % 3)) / 3);
            if (column[j] === undefined) {
                column.push([]);
            }
            if (box[brx][crx] === undefined) {
                box[brx].push([]);
            }

            var currState = Sudoku[i][j];
            if (currState !== "") {
                if (row[i][currState] === undefined) {
                    row[i][currState] = 0;
                }
                if (column[j][currState] === undefined) {
                    column[j][currState] = 0;
                }
                if (box[brx][crx][currState] === undefined) {
                    box[brx][crx][currState] = 0;
                }
                row[i][currState]++;
                column[j][currState]++;
                box[brx][crx][currState]++;

                if (row[i][currState] > 1 || column[j][currState] > 1 || box[brx][crx][currState] > 1) {
                    return false;
                }
            }
        }
    }

    return true;
}


Sudoku = [

    [3, 9, 4, 1, 7, 2, 5, 8, 6],
    [1, 5, 7, 3, 8, 6, 2, 4, 9],
    [2, 8, 6, 9, 4, 5, 7, 1, 3],
    [5, 3, 8, 7, 9, 4, 6, 2, 1],
    [9, 4, 1, 2, 6, 3, 8, 7, 5],
    [7, 6, 2, 8, 5, 1, 3, 9, 4],
    [4, 1, 3, 5, 2, 8, 9, 6, 7],
    [6, 2, 9, 4, 3, 7, 1, 5, 8],
    [8, 7, 5, 6, 1, 9, 4, 3, 2]

];

var result = isValidSudoku(Sudoku);
console.log(result);