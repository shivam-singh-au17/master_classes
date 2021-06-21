

function pyTrip(arr) {

    var res = "";
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] ** 2) + (arr[i + 1] ** 2) == (arr[i + 2] ** 2)) {
            res += arr[i] ** 2 + " " + arr[i + 1] ** 2 + " " + arr[i + 2] ** 2 + "\n";
        }
    }
    if (res != "") {
        return res
    } else {
        return -1;
    }

}



function runProgram(input) {

    var Input = input.split("\n")
    var newInput = Input[1].split(" ").map(Number);
    var ans = pyTrip(newInput);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`8
1 2 3 4 5 6 8 10`);
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
