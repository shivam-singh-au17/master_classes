
function runProgram(input) {

    var input = input.split("\n");
    var t = +input[0];
    for (let i = 0; i < t; i++) {
        var length = input[2 * i + 1].split(" ").map(Number);
        var array = input[2 * i + 2].split(" ").map(Number)
        var array2 = [];
        var stack = [];
        for (let a = array.length; a >= 0; a--) {
            while (stack.length != 0 && stack[stack.length - 1] <= array[a]) {
                stack.pop()
            }
            if (stack.length == 0) {
                array2.push(-1)
            }
            else {
                array2.push(stack[stack.length - 1])
            }
            stack.push(array[a])
        }
        array2.reverse()
        var s = 0;
        for (let j = 0; j < array.length; j++) {

            if (array2[j] != -1 && array2[j] % 2 == 0) {
                s += array[j]
            }
        }
        console.log(s)
    }



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