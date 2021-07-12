

function DifferenceOfK(arr, k) {

    var p1 = 0;
    var p2 = 1;
    var temp = false;

    while (p1 < arr.length && p2 < arr.length) {
        if (p1 != p2 && arr[p2] - arr[p1] == k) {
            temp = true;
            break;
        }
        else if (arr[p2] - arr[p1] < k) {
            p2++;
        }
        else {
            p1++;
        }
    }

    if (temp == true) {
        return "Yes";
    } else {
        return 'No';
    }

}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var nAndK = Input[i * 2 - 1].trim().split(" ").map(Number);
        var k = nAndK[1];
        var arr = Input[i * 2].trim().split(" ").map(Number);

        var ans = DifferenceOfK(arr, k);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
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

