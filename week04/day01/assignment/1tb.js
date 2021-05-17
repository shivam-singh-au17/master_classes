
function prodNum(prices, numOfTic) {

    var result = 0;
    for (var i = 0; i < prices.length; i++) {
        for (var j = 0; j < numOfTic.length; j++) {
            if (i == j) {
                result += (prices[i] * numOfTic[j]);
            }
        }
    }
    return result
}

function runProgram(input) {

    var newInput = input.split("\n");
    var prices = newInput[0].split(" ").map(Number);
    var numOfTic = newInput[1].split(" ").map(Number);
 
    var ans = prodNum(prices, numOfTic);
    console.log(ans);
}
if (process.env.USERNAME === "shiva") {
    runProgram(`1200 1400 2000
5 6 2`);
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





