

function runProgram(input) {

    let Input = input.split("\n");
    let testCases = Number(Input[0]);

    let s = 0
    let queue = []
    for (let i = 1; i <= testCases; i++) {
        let sign = Input[i].split(" ").map(Number);
        if (sign[0] == 1) {
            queue.push(sign[1]);
        } else {
            if (queue.length != 0) {
                let rem = queue.shift()
                s += rem
            } else {
                s = s - 1;
            }
        }
    }
    console.log(s);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
1 2
2
2
1 2
2`);
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