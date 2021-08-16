
function mergeSort(array) {

    if (array.length <= 1) {
        return array
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    return merge(mergeSort(left), mergeSort(right))

}

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

    let arr = newData[1].split(" ").map(Number);

    console.log(...mergeSort(arr))

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 5 0 9 8`);
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
