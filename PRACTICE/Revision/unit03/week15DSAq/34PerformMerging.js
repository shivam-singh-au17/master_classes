

function merge(left, right) {

    let array = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift())

        }
        else {
            array.push(right.shift())
        }
    }
    return array.concat(left.slice()).concat(right.slice())
}



function runProgram(input) {

    var newData = input.split("\n");

    let arr1 = newData[1].split(" ").map(Number);
    let arr2 = newData[2].split(" ").map(Number);

    // let ans = merge(arr1, arr2)
    console.log(...merge(arr1, arr2))
    // console.log('ans:', ans)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
1 5 7 9
2 4 6 8`);
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
