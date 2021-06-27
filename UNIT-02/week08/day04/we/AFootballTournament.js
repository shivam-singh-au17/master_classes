function AFootballTournament(str) {

    var object = {};
    for (var i = 0; i < str.length; i++) {
        var key = str[i];
        if (object[key] == undefined) {
            object[key] = 1;
        } else {
            var prev_object = object[key];
            object[key] = prev_object + 1;
        }
    }

    var max = 0;
    for (key in object) {
        if (object[key] > max) {
            max = object[key]
        }
    }
    for (key in object) {
        if (object[key] == max) {
            return key
        }
    }

}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);
    var strArr = []
    for (var i = 1; i <= testCases; i++) {
        strArr.push(Input[i]);
    }
    var ans = AFootballTournament(strArr)
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
ABA
ABA
A
A
A`);
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
