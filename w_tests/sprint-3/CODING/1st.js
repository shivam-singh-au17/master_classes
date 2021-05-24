///// 01

function pushZero(arr) {
    var res1 = "";
    var res2 = "";
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            res1 += arr[i] + " "
        } else {
            res2 += arr[i] + " ";
        }
    }
    res += res1 + res2;
    return res.trim()
}


function runProgram(input) {

    var Input = input.split("\n")
    var InputTimes = Number(Input[0]);


    for (var i = 1; i <= InputTimes; i++) {

        var inputArr = Input[i * 2].split(" ").map(Number);
        var ans1 = pushZero(inputArr);
        console.log(ans1);

    }
}
if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
0 1 2 3 0
5
0 0 1 2 3`);
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



//// 02

function findVovels(str) {
    var res1 = "";
    var res2 = "";
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            res1 += str[i]
        } else {
            res2 += str[i]
        }
    }
    result += res1 + res2;
    return result;
}

function runProgram(input) {

    var Input = input;

    var ans1 = findVovels(Input);
    console.log(ans1);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`rutwik`);
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



///// 03

function runProgram(input) {

    var newInput = input.split("\n");
    var n = Number(newInput[0]);

    for (var i = 1; i <= n; i++) {
        var finalResult = "";
        var result = 0;

        var data = newInput[2 * i].split(" ").map(Number);
        var newArray = data.slice();
        var array = newArray.sort(function (a, b) {
            return a - b;
        });

        for (var j = 0; j < newArray.length; j++) {
            for (var k = 0; k < array.length; k++) {
                if (data[j] == array[k]) {
                    result = j - k;
                    finalResult += result + " ";
                }
            }
        }
        console.log(finalResult);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 4 2 3 5
5
5 4 3 2 1`);
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


/// 04

function findLoop(items) {

    var n = items.length;
    var result = "";
    var isloop = false;
    for (var i = 0; i < n; i++) {
        if (items[i] == items[i + 1] && items[i] <= items[i + 1]) {
            isloop = true;
            break;
        }
    }
    if (isloop) {
        result += "Loop";
    } else {
        result += "No Loop";
    }
    return result;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var testCase = +newInput[0];

    for (var a = 1; a <= testCase; a++) {
        var newdata = newInput[a * 2].split(" ").map(Number);

        var res = findLoop(newdata);
        console.log(res);
    }

}
if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 2 3 4 5
6
1 2 3 4 6 6`);
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







/// 05

function gretarAhed(items) {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i] > items[i + 1])
            count++;
    }
    return count;
}


function runProgram(input) {
    var Input = input.split(/[\r\n]+/);
    var InputTimes = Number(Input[0]);
    for (var i = 1; i <= InputTimes; i++) {

        var newInput = Input[i * 2].split(" ").map(Number);

        var ans = gretarAhed(newInput);
        console.log(ans);

    }

}
if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 4 2 3 5
5
5 4 3 2 1`);
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



///// 06

function GCDEasy(items1, items2) {
    var result = ""
    for (i = 0; i <= items1; i++) {
        if (items1 % i == 0 && items2 % i == 0) {
            result = i
        }
    }
    return result;
}

function runProgram(input) {

    var newInp = input.split(" ").map(Number);

    var ans = GCDEasy(newInp[0], newInp[1]);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`51 68`);
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



//// 07

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);

    for (var a = 1; a <= t; a++) {
        var arr = newInput[2 * a].split(" ").map(Number);
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1)
                count++;
            break;
        }
    }
    if (count == 1) {
        console.log("Misbehave!");
    } else {
        console.log("Behave!")
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




//// 07 

function arrBehavior(arr) {

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1)
            count++;
        break;
    }

    if (count == 1) {
        return "Misbehave!"
    } else {
        return "Behave!"
    }
}

function runProgram(input) {

    var newInput = input.split("\n");
    var testCase = +newInput[0];

    for (var a = 1; a <= testCase; a++) {

        var data = newInput[a * 2].split(" ").map(Number);

        var ans = arrBehavior(data);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
6
1 3 3 4 5 6
5
1 2 3 5 7 4 5`);
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