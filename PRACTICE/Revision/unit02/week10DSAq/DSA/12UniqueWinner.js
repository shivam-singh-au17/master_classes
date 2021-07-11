

function UniqueWinner(arr) {

    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        if (obj[key] == undefined) {
            obj[key] = 1;
        } else {
            var prev = obj[key];
            obj[key] = prev + 1;
        }
    }
    var newArr = [];
    for (key in obj) {
        if (obj[key] == 1) {
            newArr.push(Number(key))
        }
    }

    return newArr;
}


function findMin(arr) {
    if (arr == "") {
        return -1;
    } else {
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        return min;
    }
}


function findIndex(arr, value) {
    if (value == -1) {
        return value;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] ==  value) {
               return (i + 1)
            }
        }
    }
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var arr = Input[i * 2].trim().split(" ").map(Number);

        var newArr = UniqueWinner(arr);
        var minNum = findMin(newArr);
        var ans = findIndex(arr, minNum);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
2
1 1 1 2 2 3 3 3 4
3
2 1 3 4 5 6 7 0
4
2 1 2 3 7
1
0 0 0 4 4 6 6`);
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