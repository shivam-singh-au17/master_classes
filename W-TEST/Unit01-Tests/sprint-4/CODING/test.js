// 1
function runProgram(input) {
    var newInput = input.split("\n");
    var matOneDim = newInput[0].split(" ").map(Number);
    var r1 = matOneDim[0];
    var c1 = matOneDim[1];

    var matOne = newInput.slice(1).map(function (row) {
        return row.split(" ").map(Number);
    });
    for (var i = 0; i < r1; i++) {
        var res = "";
        for (var j = 0; j < c1; j++) {
            if (matOne[i][j] == 0) {
                matOne[i][j] = 1;
                res = res + matOne[i][j] + " ";
            } else {
                matOne[i][j] = 0;
                res = res + matOne[i][j] + " ";
            }
        }
        console.log(res)
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 2
1 0
0 1
1 1`);
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

























// 2


function runProgram(input) {
    input = input.trim().split("\n");
    var test = Number(input[0]);
    for (var i = 1; i <= test; i++) {
        var n = Number(input[(2 * i) - 1]);
        var arr = input[2 * i].trim().split(' ').map(Number).sort(function (a, b) {
            return a - b;
        });
        var min_sum = 0;
        var max_sum = 0;
        for (var j = 0; j < 3; j++) {
            min_sum += arr[j];
        }
        for (var j = n - 1; j >= n - 3; j--) {
            max_sum += arr[j]
        }
        var diff = max_sum - min_sum;
        console.log(diff);
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
6
1 2 3 4 5 6`);
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

































// 3


function sortStr(str) {
    strArr = []
    for (var i = 0; i < str.length; i++) {
        strArr.push(str[i])
    }
    return strArr.sort()
}

function findFreq(strArr) {
    console.log(strArr);
    var temp = strArr[0];
    var count = 1;
    var result = 0;
    for (var i = 1; i < strArr.length; i++) {
        if (strArr[i] == temp) {
            count++;
        } else {
            result = Math.max(result, count);
            temp = strArr[i];
            count = 1;
        }
    }
    return result
}


function runProgram(input) {

    var Input = input;

    var sorting = sortStr(Input)
    var result = findFreq(sorting);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`acbcacbcbcacbcdcbcacb`);
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




























// 4


function runProgram(input) {
    var newInput = input.split("\n");
    var [row, col] = newInput[0].split(" ").map(Number);
    var mat = newInput.slice(1).map(function (item) {
        return item.split(" ").map(Number);
    });
    res = "";
    for (var i = 0; i < row; i++) {
        if (i % 2 == 0) {
            for (var j = 0; j < col; j++) {
                res = res + mat[i][j] + " ";
            }
            res = res + "\n";
        }
    } console.log(res)

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




































// 5
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


















// 6

function runProgram(input) {
    input = input.trim().split("\n");
    var p = input[0].split(" ");
    var r = Number(p[0]);
    var c = Number(p[1]);

    var mat = input.slice(1).map(function (num) {
        return num.split(" ").map(Number);
    });
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            if (mat[i][j] % 2 == 0) {
                sum1 = sum1 + mat[i][j];
            } else if (mat[i][j] % 2 == 1) {
                sum2 = sum2 + mat[i][j];
            }
        }
    } console.log(Math.abs(sum1 - sum2))

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


























// 7

function runProgram(input) {
    input = input.trim().split("\n");
    var test = Number(input[0]);
    for (var i = 1; i <= test; i++) {
        var inp = input[i].split(' ').map(Number);
        var a = inp[0];
        var b = inp[1];

        var diff = b - a;
        if (diff % 2 == 1) {
            console.log((Math.ceil(diff / 2)));
        }
        if (diff % 2 == 0) {
            console.log(diff / 2);
        }
    }
}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
5 10
6 10`);
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

