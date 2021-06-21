
function rotaetArr(arr, k) {

    var n = arr.length;

    if (k > n) {
        k = k % n;
        var rotateArr = []
        for (var i = 0; i < n; i++) {
            rotateArr.push(arr[(n + i - k) % n])
        }
        return rotateArr;
    } else {
        var rotateArr = []
        for (var i = 0; i < n; i++) {
            rotateArr.push(arr[(n + i - k) % n])
        }
        return rotateArr;
    }
}

function printResult(res) {
    var result = "";
    for (var i = 0; i < res.length; i++){
        result += res[i] + " ";
    }
    return result;
}

function runProgram(input) {
    var Input = input.split("\n");

    var testCase = Number(Input[0]);

    for (var i = 1; i <= testCase; i++) {

        var newInput1 = Input[i * 2 - 1].split(" ").map(Number);
        var k = newInput1[1]
        var newInput2 = Input[i * 2].split(" ").map(Number);

        var result = rotaetArr(newInput2, k);
        var ans = printResult(result);
        console.log(ans);
    }


}
if (process.env.USERNAME === "shiva") {
    runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);
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


