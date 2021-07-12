
function findCountOfVowels(str) {
    var countA = 0;
    var countI = 0;
    var countO = 0;
    var countU = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            countA++;
        }
        if (str[i] == 'i') {
            countI++;
        }
        if (str[i] == 'o') {
            countO++;
        }
        if (str[i] == 'u') {
            countU++;
        }
    }

    if (countA >= 1 && countI >= 1 && countO >= 1 && countU >= 1) {
        return true;
    } else {
        return false;
    }
}



function findVowelsSubStr(str) {

    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var subStr = "";
        for (var j = i; j < str.length; j++) {
            subStr += str[j];
            if (findCountOfVowels(subStr) == true) {
                count++;
            }
        }
    }
    return count;
}

function runProgram(input) {

    var checkCount = findVowelsSubStr(input);
    console.log(checkCount)

}


if (process.env.USERNAME === "shiva") {
    runProgram(`coronavirus`);
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

