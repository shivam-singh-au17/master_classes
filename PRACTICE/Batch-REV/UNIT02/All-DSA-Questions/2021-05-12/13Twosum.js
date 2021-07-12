

function findSumIdx(arr, k) {
    var temp = false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == k) {
                console.log(i, j);
                temp = true;
                break;
            }
        }
        if (temp == true) {
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
        var lenAndK = Input[i * 2 - 1].split(" ").map(Number);
        var k = lenAndK[1];

        var arr = Input[i * 2].split(" ").map(Number);

        findSumIdx(arr, k);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49
5 4
5 2 3 3 4 0`);
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













// 2nd mathod



function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    for (let a = 0; a < t; a++) {
        var n = input[2 * a + 1].split(" ").map(Number);
        var length = n[0];
        var k = n[1];
        var arr = input[2 * a + 2].split(" ").map(Number);


        function twoSum(array, k) {
            let start = 0;
            let end = array.length - 1;
            while (start < end) {
                if (array[start] + array[end] === k) {
                    return `${start} ${end}`;
                }
                else if (array[start] + array[end] < k) {
                    start++;
                }
                else {
                    end--;
                }
            }
            //  return "-1 -1";
        }
        var x = twoSum(arr, k);
        if (x == undefined) {
            console.log("-1 -1");
        }
        else {
            console.log(x);
        }
    }




}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});