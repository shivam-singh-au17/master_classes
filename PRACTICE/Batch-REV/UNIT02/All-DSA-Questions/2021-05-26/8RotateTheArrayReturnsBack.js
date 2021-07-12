
function RotateTheArray(arr, k) {

    var n = arr.length;
    if (k > n) {
        k = k % n;
        var rotateArr = "";
        for (var i = 0; i < n; i++) {
            rotateArr += arr[(n + i - k) % n] + " ";
        }
        return rotateArr;
    } else {
        var rotateArr = "";
        for (var i = 0; i < n; i++) {
            rotateArr += arr[(n + i - k) % n] + " ";
        }
        return rotateArr;
    }
}


function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    for (var i = 1; i <= testCases; i++) {

        var NandK = input[i * 2 - 1].split(" ").map(Number);
        var k = NandK[1];

        var arr = input[i * 2].split(" ").map(Number);

        var ans = RotateTheArray(arr, k);
        console.log(ans);


    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
2 1
1 2
2 2
1 2
3 1
1 2 3`);
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