
function findMaxCountSolQ(arr, k) {
    var count = 0;
    var skip = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] <= k && skip < 2) {
            count++;
        } else {
            skip++;
        }
    }
    return count;
}

function runProgram(input) {

    var Input = input.split("\n");

    var lenAndK = Input[0].split(" ").map(Number);
    var k = lenAndK[1];

    var arr = Input[1].split(" ").map(Number);

    var ans = findMaxCountSolQ(arr, k);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`7 6
7 4 5 7 4 2 2`);
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




// function findMaxCountSolQ(items, k) {
//     var count = 0;
//     for (var i = 0; i < items.length; i++) {
//         if (items[i] > k) {
//             count++;
//         }
//         if (count == 2) {
//             return i - 1;
//         }
//     }
//     if (count == 1) {
//         return items.length - 1
//     } else if (count < 2) {
//         return items.length
//     }

// }