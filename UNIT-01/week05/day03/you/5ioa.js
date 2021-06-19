
var findComanInt = function (num1, num2) {

    for (var i = 0; i < num1.length; i++) {
        for (var j = 0; j < num2.length; j++) {
            if (num1[i] == num2[j]) {
                var ans = num1[i]
            }
        }
    }
    return ans;
}

function runProgram(input) {

    var inp_split = input.split("\n");

    var arr1 = inp_split[1].split(" ").map(Number);
    var arr2 = inp_split[2].split(" ").map(Number);

    var result = findComanInt(arr1, arr2);
    console.log(result);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`3
4 4 7
9 7 5`);
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