
function runProgram(input) {

    var newInput = input.split("\n");
    var n = Number(newInput[0]);

    for (var i = 1; i <= n; i++) {
        var finalResult = "";
        var result = 0;

        var data = newInput[2 * i].split(" ").map(Number);
        var newArray = data.slice();
        var array = newArray.sort(function (a, b) {
            return a - b;
        });

        for (var j = 0; j < newArray.length; j++) {
            for (var k = 0; k < array.length; k++) {
                if (data[j] == array[k]) {
                    result = j - k;
                    finalResult += result + " ";
                }
            }
        }
        console.log(finalResult);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 4 2 3 5
5
5 4 3 2 1`);
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
