

function DayIndex(today) {
    allDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    for (var i = 0; i < allDay.length; i++) {
        if (allDay[i] == today) {
            return i
        }
    }
}

function dayAfterDay(today, index) {
    allDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return allDay[(today + index) % 7 ]
   
}


function runProgram(input) {
    var newInput = input.split("\n");

    var day = newInput[0];
    var afterDay = Number(newInput[1]);

    var dayIndex = DayIndex(day);
    var printAns = dayAfterDay(dayIndex, afterDay);
    console.log(printAns);
   

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

