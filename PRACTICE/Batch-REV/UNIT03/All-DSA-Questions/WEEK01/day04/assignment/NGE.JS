function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (a = 0; a < t; a++) {
        let array = newInput[2 * a + 2].split(" ").map(Number);
        let stack = [];
        let str = []
        var str1 = ""
        for (let i = array.length - 1; i >= 0; i--) {
            while (stack[stack.length - 1] <= array[i]) {
                stack.pop();
            }
            if (stack.length === 0) {
                //console.log("-1");
                str.push(-1)
            } else {
                //console.log(stack[stack.length-1])
                str.push(stack[stack.length - 1])
            }

            stack.push(array[i]);
        }
        for (j = str.length - 1; j >= 0; j--) {
            str1 = str1 + str[j] + " "
        }
        console.log(str1)

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