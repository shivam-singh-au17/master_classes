function runProgram(input) {
    var input = input.split("\n");
    var num = input[0].split(" ").map(Number);
    var length = num[0];
    var n = num[1];
    var k = num[2]
    var arr = input[1].split(" ").map(Number);
    var array = arr.sort((a, b) => a - b);
    var sum = 0;
    count = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i] + sum <= k) {

            sum += array[i]
            count++;
        }

        else {

            break;

        }





    }
    if (count == n) {
        console.log("Party")
    }
    else {
        console.log("Sad")
    }


}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});