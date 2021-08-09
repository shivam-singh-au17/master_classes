
function countOddSubSet(arr, n) {

    let res = 0;
    for (let i = 0; i <= n - 1; i++) {
        let val = 0;
        for (let j = i; j <= n - 1; j++) {
            val = val + arr[j];

            if (val % 2 != 0)
                res++;
        }
    }
    return (res);
}


function runProgram(input) {

    var input = input.split("\n");

    var arr = input[1].split(" ").map(Number);
    var n = arr.length;
    var res = countOddSubSet(arr, n);
    console.log(res);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1 2 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\num$/, "");
        read = read.replace(/\num$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\num$/, "");
        runProgram(read);
        process.exit(0);
    });
}
