
function totalExpenses(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function printREsult(sum, salary) {
    if (sum < salary) {
        return "Save"
    }else if (sum == salary) {
        return "Neutral"
    } else {
        return "Debt"
    }
}

function runProgram(input) {

    var input = input.split("\n");
    var expenses = input[1].split(" ").map(Number);
    var monthlySal = Number(input[2])

    var totalSum = totalExpenses(expenses)
    var result = printREsult(totalSum, monthlySal)
    console.log(result);
   

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
1 2 3 4 5
16`);
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