
function findCont(items, k) {
   
    var max = items[0]
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i] > max) {
            max = items[i]
            count++
        }
    }
    return (count + 1) * k;
}

function runProgram(input) {

    var Input = input.split("\n");
    var InputTimes = Number(Input[0]);

    for (var i = 1; i <= InputTimes; i++) {

        var newInput1 = Input[i * 2 - 1].split(" ").map(Number);
        var newInput2 = Input[i * 2].split(" ").map(Number);

        var ans = findCont(newInput2, newInput1[1]);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`);
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

