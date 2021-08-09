

function countMoves(queue_1, queue_2) {
    let count = 0;
    while (queue_1.length != 0) {
        let temp = queue_1.splice(0, 1);
        for (let i = 0; i < queue_2.length; i++) {
            if (queue_2[i] == temp) {
                queue_2.splice(i, 1)
                count++;
                break;
            } else {
                count++;
            }
        }
    }
    return count - 1;
}


function runProgram(input) {

    var Input = input.split("\n");
    let queue_1 = Input[1].split(" ").map(Number);
    let queue_2 = Input[2].split(" ").map(Number);

    let ans = countMoves(queue_1, queue_2);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`20
18 19 14 3 20 13 10 15 8 9 16 5 11 7 17 2 12 6 1 4
20 10 13 15 17 2 12 18 16 8 9 6 5 19 1 7 14 3 11 4`);
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
