
function findIndex2(items) {

    for (var i = 0; i < items.length; i++) {
        if (items[i] == 2 && (items.length - 1) != 2) {
            var present2OrNot = items[i + 1]
        }
    }
    return present2OrNot
}


function printResult(index) {
    if (index != undefined) {
        return index;
    } else {
        return -1
    }
}

function runProgram(input) {

    var Input = input.split("\n");
    var newInput = Input[1].split(" ").map(Number);
 
    var ans1 = findIndex2(newInput);
    var ans2 = printResult(ans1);
    console.log(ans2);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 4 7 0 1`);
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




