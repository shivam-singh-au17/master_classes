function runProgram(input) {

    var input = input.trim().split(" ").map(Number);

    var Base = input[0]
    var Perpendicular = input[1]
    var Hypotenuse = (Base * Base) + (Perpendicular * Perpendicular)

    console.log(Hypotenuse);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 4`);
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