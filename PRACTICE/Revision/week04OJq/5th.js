function Smallest(item1) {
    var res = item1[0];
    for (var i = 0; i < item1.length; i++) {
        if (item1[i] < res) {
            res = item1[i]
        }
    }
    return res;
}

function Largest(item1) {
    var res = item1[0];
    for (var i = 0; i < item1.length; i++) {
        if (item1[i] > res) {
            res = item1[i]
        }
    }
    return res;
}


function runProgram(input) {

    var Input = input.split("\n")
    var newInput2 = Input[1].split(" ").map(Number);

    var ans1 = Smallest(newInput2);
    var ans2 = Largest(newInput2);
    console.log(ans1);
    console.log(ans2);
}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
-2 0 8 4`);
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