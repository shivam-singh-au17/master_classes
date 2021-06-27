function dayOfTheWeek(day, afterDay) {

    var myDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var res = ""
    for (var i = 0; i < myDays.length; i++) {
        if (day == myDays[i]) {
            res += myDays[(i + afterDay) % 7];
        }
    }
    return res
}

function runProgram(input) {

    var Input = input.split("\n");

    var day = Input[0];
    var afterDay = Number(Input[1]);

    var ans = dayOfTheWeek(day, afterDay);
    console.log(ans)

}


if (process.env.USERNAME === "shiva") {
    runProgram(`Wednesday
8`);
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
