
function WhoisgoingForward(arr, k) {

    arr.sort(function (a, b) { return a - b });
    var highValue = arr[arr.length - k];

    if (highValue == 0) {
        return 0;
    } else {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= highValue) {
                count++;
            }
        }
    
        return count;
    }

}

function runProgram(input) { 

    var Input = input.split("\n");

    var NandK = Input[0].trim().split(" ").map(Number);
    var k = NandK[1];

    var arr = Input[1].trim().split(" ").map(Number);

    var ans = WhoisgoingForward(arr, k);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`8 5
0 0 0 0 0 0 0 0`);
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






