

// FIXME:




function sortMarks(price, weight, pbyw) {
    for (var i = 0; i < price.length - 1; i++) {
        for (var j = 0; j < price.length - i - 1; j++) {
            if (pbyw[j] < pbyw[j + 1]) {

                var temp = price[j];
                price[j] = price[j + 1];
                price[j + 1] = temp;

                temp = weight[j];
                weight[j] = weight[j + 1];
                weight[j + 1] = temp;

                temp = pbyw[j];
                pbyw[j] = pbyw[j + 1];
                pbyw[j + 1] = temp;

            }
        }
    }
}


function StealAsMuchAsYouCan(price, weight) {

    let ratio = [];
    for (let i = 0; i < price.length; i++) {
        ratio.push(price[i] / weight[i]);
    }
    return ratio;

}

function findRes(price, weight, cap) {

    let profit = 0;

    for (let i = 0; i < price.length; i++) {

        if (cap > 0 && weight[i] <= cap) {
            cap = cap - weight[i]
            profit = profit + price[i];
        } else {
            if (cap > 0) {
                profit = profit + price[i] * (cap / weight[i])
            }
            break;
        }
    }

    return profit
}


function findMaxProfit(num) {
    let strProfit = String(num);
    let arr = strProfit.split(".")
    if (arr[1] != undefined) {
        if (Number(arr[1][0]) < 5) {
            return Math.floor(num)
        } else {
            return Math.ceil(num)
        }
    } else {
        return num
    }

}


function runProgram(input) {

    let newData = input.split("\n");
    let testCases = Number(newData[0]);
    let SandK = newData[1].split(" ").map(Number);
    let S = SandK[0];
    let K = SandK[1];
    let weight = [];
    let item = [];
    for (let i = 2; i <= K + 1; i++) {
        let data = newData[2].split(" ").map(Number);
        weight.push(data[0])
        item.push(data[1])
    }

    let ans = StealAsMuchAsYouCan(item, weight);
    sortMarks(item, weight, ans);
    let maxProfit = findRes(item, weight, S);
    console.log(findMaxProfit(maxProfit));

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
4 5
1 8
2 4
3 0
2 5
2 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGlet", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}