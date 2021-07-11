
function twoSum(arr, k) {

    var p1 = 0;
    var p2 = arr.length - 1;
    var temp = false;

    while (p1 < p2) {
        if ((arr[p1] + arr[p2]) > k) {
            p2--;
        }
        else if
            ((arr[p1] + arr[p2]) < k) {
            p1++;
        }
        else if ((arr[p1] + arr[p2]) == k) {
            console.log(p1, p2);
            temp = true;
            break;
        }
    }

    if (temp == false) {
        console.log(-1, -1);
    }

}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var nAndK = Input[i * 2 - 1].trim().split(" ").map(Number);
        var k = nAndK[1];
        var arr = Input[i * 2].trim().split(" ").map(Number);

        twoSum(arr, k);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);
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