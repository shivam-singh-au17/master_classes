
function chocoShop(student, price) {
    var DariyMilk = 5;
    var Shots = 2;
    var Eclairs = 1;

    if ((DariyMilk * student) <= price) {
        return 'DariMilk'
    } else if ((Shots * student) <= price) {
        return 'Shots'
    } else if ((Eclairs * student) <= price) {
        return 'Eclairs'
    } else {
        return 'No Choclets'
    }
}


function runProgram(input) {

    var Input = input.split("\n");
    var price = Number(Input[0]);
    var student = Number(Input[1]);

    var result = chocoShop(student, price);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10
15`);
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
