
function findMax(num1, num2) {
    if (num1 == num2) {
        return num1;
    } else {
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }
}


function findPlatform(start, end, len) {

    var numPlat = 1;
    var res = 1;
    var i = 1;
    var j = 0;

    for (var i = 0; i < len; i++) {
        numPlat = 1;
        for (var j = i + 1; j < len; j++) {
            if ((start[i] >= start[j] && start[i] <= end[j]) || (start[j] >= start[i] && start[j] <= end[i])) {
                numPlat++;
            }
        }
        res = findMax(res, numPlat);
    }
    return res;
}

function numAdd(num) {
    let sum = num.split(":")
    return Number(sum.join(""));
}

function runProgram(input) {

    let Input = input.split("\n");

    let len = Number(Input[0]);
    let arr1 = Input[1].split(" ");
    let ar1 = arr1.map((item) => {
        return numAdd(item)
    })

    let arr2 = Input[2].split(" ");
    let ar2 = arr2.map((item) => {
        return numAdd(item)
    })

    console.log(findPlatform(ar1, ar2, len));

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`);
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