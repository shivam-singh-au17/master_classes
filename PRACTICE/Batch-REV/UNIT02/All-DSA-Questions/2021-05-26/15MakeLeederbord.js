

function swapOrNot(str1, str2) {
    for (var i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] != str2[i]) {
            if (str1[i] > str2[i]) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}


function sortNames(str, maArr) {
    for (var i = 0; i < str.length - 1; i++) {
        for (var j = 0; j < str.length - i - 1; j++) {
            if (swapOrNot(str[j], str[j + 1]) == true) {

                var temp = str[j];
                str[j] = str[j + 1];
                str[j + 1] = temp;

                temp = maArr[j];
                maArr[j] = maArr[j + 1];
                maArr[j + 1] = temp;

            }
        }
    }
    return str;
}


function sortMarks(maArr, str) {
    for (var i = 0; i < maArr.length - 1; i++) {
        for (var j = 0; j < maArr.length - i - 1; j++) {
            if (maArr[j] < maArr[j + 1]) {

                var temp = maArr[j];
                maArr[j] = maArr[j + 1];
                maArr[j + 1] = temp;

                temp = str[j];
                str[j] = str[j + 1];
                str[j + 1] = temp;

            }
        }
    }
    return maArr;
}



function printResult(maArr, str) {
    var count = 0;
    var rank = 1;
    var prev = -1;
    for (var i = 0; i < maArr.length; i++) {
        if (maArr[i] == prev) {
            console.log(rank, str[i]);
        } else {
            rank += count;
            count = 0;
            console.log(rank, str[i]);
        }
        count++;
        prev = maArr[i];
    }

}


function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    var namesArr = [];
    var marksArr = [];

    for (var i = 1; i <= testCases; i++) {

        var SandM = input[i].split(" ");
        namesArr.push(SandM[0])
        marksArr.push(Number(SandM[1]))

    }

    var sortNameArr = sortNames(namesArr, marksArr);
    var sortMarkArr = sortMarks(marksArr, namesArr);

    printResult(sortMarkArr, sortNameArr);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
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

