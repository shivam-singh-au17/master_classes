
function bigLength(str) {
    var countA = 0;
    var countT = 0;
    var countC = 0;
    var countG = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'A') {
            countA++
        } else if (str[i] == 'T') {
            countT++
        }else if (str[i] == 'C') {
            countC++
        }else if (str[i] == 'G') {
            countG++
        }
    }
    if (countA > countT && countA > countC && countA > countG) {
        return countA;
    } else if (countT > countA && countT > countC && countT > countG) {
        return countT;
    } else if (countC > countA && countC > countT && countC > countG) {
        return countC
    } else if (countG > countA && countG > countT && countG > countC) {
        return countG
    }
}

function runProgram(input) {

    var Input = input;

    var ans = bigLength(Input);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`ATTCGGGATT`);
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
