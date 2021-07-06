function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    function selectionSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {

                if (array[j] > array[j + 1]) {
                    let temp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp;


                }

            }

        }
        return array

    }
    var x = selectionSort(arr)
    var res = ""
    for (let i = 0; i < x.length; i++) {
        res += x[i] + " "
    }
    console.log(res)
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