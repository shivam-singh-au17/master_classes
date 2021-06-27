

function my3DArr(arr, layer, row, col) {
    var temp = 0;
    var ThreeDarr = []
    for (var i = 0; i < layer; i++) {
        var TwoDarr = []
        for (var j = 0; j < row; j++) {
            var OneDarr = [];
            for (var k = 0; k < col; k++) {
                OneDarr.push(arr[temp]);
                temp++
            }
            TwoDarr.push(OneDarr);
        }
        ThreeDarr.push(TwoDarr);
    }
    return ThreeDarr;
}


function printResult(arr, layer, row, col) {
    for (var i = 0; i < layer; i++) {
        for (var j = 0; j < row; j++) {
            var res = "";
            for (var k = 0; k < col; k++) {
                res += arr[i][j][k] + " ";
            }
            console.log(res);
        }
    }
}

function runProgram(input) {

    var input = input.split("\n");
    var layerRowCol = input[0].split(" ").map(Number);

    var layer = layerRowCol[0];
    var row = layerRowCol[1];
    var col = layerRowCol[2];

    var arr = input[1].split(" ").map(Number);

    var ans = my3DArr(arr, layer, row, col);
    printResult(ans, layer, row, col)


}

if (process.env.USERNAME === "shiva") {
    runProgram(`2 2 2
1 2 3 4 5 6 7 8`);
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

