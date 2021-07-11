// TODO:

function PairlesthanK(arr, k) {

    arr.sort(function (a, b) { return a - b });

    var p1 = 0;
    var p2 = arr.length - 1;
    var big = -1;

    while (p1 < p2) {

        var sum = p1 + p2
        if (sum < k) {
            big = Math.max(sum, big)
            p1 += 1
        }
        else {
            p2 -= 1
        }
    }
    return big

}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var arr = Input[(i * 2) + (i - 1)].trim().split(" ").map(Number);
        var k = Number(Input[i * 3]);

        var ans = PairlesthanK(arr, k);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`9
6
9 1 3 8 8 3
1
3
8 4 2
7
9
4 1 4 5 9 7 2 5 7
9
4
6 8 9 3
4
7
3 2 1 4 1 2 6
9
5
7 1 6 8 9
3
2
9 2
9
6
4 7 9 6 6 2
7
8
1 4 9 1 5 7 8 3
4`);
} else {
    process.stdin.rebige();
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






