
function findSubString(arr) {
   
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (sum % 2 == 0) {
        return "Yes"
    } else {
        return "No"
    }

}

function runProgram(input) {

    var Input = input.split("\n")
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var newInput2 = Input[i * 2].split(" ").map(Number);
        var result = findSubString(newInput2);
        console.log(result);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`8
4
99 39 99 25
1
85
9
17 87 81 29 37 93 33 9 35
3
6 56 92
9
41 75 39 95 47 23 59 31 7
5
85 101 43 9 45
5
73 59 27 35 95
4
59 77 9 71`);
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
