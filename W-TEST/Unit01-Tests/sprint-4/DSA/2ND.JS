
function findSubString(arr) {

    for (var i = 0; i < arr.length; i++) {

        var newSubArr = [];
        var count = 0;
        for (var j = i; j < arr.length; j++) {
            newSubArr.push(arr[j]);

            for (var k = 0; k < newSubArr.length; k++) {
                if (newSubArr[k] % 2 == 1 && newSubArr[newSubArr.length - 1] % 2 == 0) {
                    count++;
                }
            }
        }
        return count;
    }

}


function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0])

    for (var i = 1; i <= testCases; i++) {

        var arr = input[i * 2].split(" ").map(Number);
        var totalCount = findSubString(arr)
        console.log(totalCount);
    }


}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
5
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