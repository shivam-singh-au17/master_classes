

function matchWin(pointInd, pointAus, matchInd, matchAus) {
    if (pointInd > pointAus) {
        return 'India'
    } else if (pointInd < pointAus) {
        return 'Australia'
    } else if (matchInd > matchAus) {
        return 'Australia'
    } else if (matchInd < matchAus) {
        return 'India'
    } else if (matchInd == matchAus) {
        return 'Play Another Game!'
    } 
}



function runProgram(input) {

    var Input = input.split("\n")
    var pointInd = Number(Input[0]);
    var pointAus = Number(Input[1]);
    var matchInd = Number(Input[2]);
    var matchAus = Number(Input[3]);

    var result = matchWin(pointInd, pointAus, matchInd, matchAus);
    console.log(result);
        

}

if (process.env.USERNAME === "shiva") {
    runProgram(`580
580
10
10`);
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
