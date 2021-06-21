
function greterThanK(items, k) {
    var res = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i] > k) {
            res.push(items[i])
        }
    }
    return res
}

var sortArr = function (items1, items2) {
    return items1 - items2;
}

function printResult(items, arr, k) {
    var answ = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > k) {
            answ = true
        }
    }
    if (answ == true) {
        return items[0]
    } else {
        return -1
    }
}

function runProgram(input) {

    var Input = input.split("\n");
    var InputTimes = Number(Input[2]);
    var newInput = Input[1].split(" ").map(Number);

    for (var i = 1; i <= InputTimes; i++){
        
        var N = Number(Input[i+2]);
    
        var ans1 = greterThanK(newInput, N);
        var result = ans1.sort(sortArr);
        var ans3 = printResult(result, newInput, N);
        console.log(ans3);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
65
15
`);
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
