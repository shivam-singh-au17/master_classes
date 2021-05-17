
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

function allPrice(totalPrice, totalMoney) {
    if (totalPrice > totalMoney) {
        return "Not Possible";
    } else {
        return "Possible";
    }
}

function runProgram(input) {

    var newInput = input.split("\n");
    var prices = newInput[0].split(" ").map(Number);
    var numOfPhones = newInput[1].split(" ").map(Number);
    var allMoney = 150000;
    var totalPrice = prodNum(prices, numOfPhones);
    var ans = allPrice(totalPrice, allMoney)
    console.log(ans);
}
if (process.env.USERNAME === "shiva") {
    runProgram(`10000 20000 15000 5000
2 3 4 3`);
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
