
var countPairs = function (num1, target) {
    var count = 0;
    for (var i = 0; i < num1.length; i++) {
        for (var j = i + 1; j < num1.length; j++) {
            if (num1[i] + num1[j] == target) {
                count++;
            }
        }
    }
    return count;
}

function runProgram(input) {

    var inp_split = input.split("\n");

    var arr1 = inp_split[0].split(" ").map(Number);
    var arr2 = inp_split[1].split(" ").map(Number);

    var target = arr1[1]

    var result = countPairs(arr2, target);
    console.log(result);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`5 9
3 0 6 2 7`);
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