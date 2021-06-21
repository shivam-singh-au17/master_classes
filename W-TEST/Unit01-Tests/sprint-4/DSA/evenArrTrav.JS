
function ArrTraversal(arr) {
    var evenArr = " ";
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            evenArr += arr[i] + " ";
        }
    }
    return evenArr;

}


function runProgram(input) {

    var input = input.split("\n");


    var arr = input[1].split(" ").map(Number);
    var totalSum = ArrTraversal(arr)
    console.log(totalSum);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
1 2 3 4 5`);
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