
function PairlesthanK(arr, k) {

    arr.sort(function (a, b) { return a - b });

    var p1 = 0;
    var p2 = arr.length - 1;
    var big = -1;
    var sum = 0;

    while (p1 < p2) {

         sum = arr[p1] + arr[p2]
        if (sum < k) {
            big = Math.max(sum, big)
            p1++;
        }
        else {
            p2--;
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
    runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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





