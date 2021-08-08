


function SmallestNumber(arr) {

    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (temp > arr[i]) {
            temp = arr[i]
        }
    }
    return temp;

}

function LargestNumber(arr) {

    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (temp < arr[i]) {
            temp = arr[i]
        }
    }
    return temp;
}



function runProgram(input) {

    var input = input.split("\n");

    let arr = input[1].trim().split(" ").map(Number);
    let min = SmallestNumber(arr);
    let max = LargestNumber(arr);

    console.log(min);
    console.log(max);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`11
55 -5 -8 2 0 9 4 5 6 9 1`);
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
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}

