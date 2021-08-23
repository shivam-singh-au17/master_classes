
// FIXME:


function runProgram(input) {
    var input = input.split("\n");
    var array = input[1].split(" ").map(Number);
    function quickSort(array) {
        if (array.length == 1) {
            return array
        }
        let p = array[array.length - 1];
        let leftArr = [];
        let rightArr = [];
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < p) {
                leftArr.push(array[i])
            }
            else {
                rightArr.push(array[i])
            }
        }
        if (leftArr.length > 0 && rightArr.length > 0) {
            return [...quickSort(leftArr), p, ...quickSort(rightArr)]
        }
        else if (leftArr.length > 0) {
            return [...quickSort(leftArr), p]
        }
        else {
            return [p, ...quickSort(rightArr)]
        }

    }
    console.log(...quickSort(array))

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});