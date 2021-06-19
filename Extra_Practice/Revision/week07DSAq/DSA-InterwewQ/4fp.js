

function findPairs(arr, k) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if ((arr[i] * arr[j]) == k) {
                count++;
            }
        }
    }
    return count;
}



function runProgram(input) {

    var data = input.split("\n");
    var testcases = Number(data[0]);

    for (var i = 1; i <= testcases; i++) {

        var nAndM = data[i * 2 - 1].split(" ").map(Number);
        var m = nAndM[1];

        var inputArr = data[i * 2].split(" ").map(Number);

        var ans = findPairs(inputArr, m);
        console.log(ans);


    }
}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
3 0
1 3 2
5 4
3 2 2 1 5`);
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

