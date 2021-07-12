
function HammingDistance(n1, n2) {

    let count = 0;
    let xorNum = n1 ^ n2;

    for (let i = 0; i < 32; i++) {
        if (((xorNum >> i) & 1) == 1) {
            count++
        }
    }
    return count;

}


function runProgram(input) {

    var input = input.split("\n");

    var testCases = Number(input[0]);

    for (var i = 1; i <= testCases; i++) {

        var nums = input[i].split(' ').map(Number);
        var num1 = nums[0]
        var num2 = nums[1]
        var res = HammingDistance(num1, num2);
        console.log(res);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
15 7
0 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\num$/, "");
        read = read.replace(/\num$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\num$/, "");
        runProgram(read);
        process.exit(0);
    });
}
