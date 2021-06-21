

function findNextDay(targetDay, afterDay) {

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (var i = 0; i < days.length; i++) {
        if (days[i] == targetDay) {
            var ans = (days[(i + afterDay) % 7]);
        }
    }
    return ans;
}

function runProgram(input) {

    var newInput = input.split("\n");
    var targetDay = newInput[0];
    var dayAfter = Number(newInput[1]);
    var result = findNextDay(targetDay, dayAfter);
    console.log(result);

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

