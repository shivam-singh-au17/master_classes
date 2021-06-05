

function findSubString(arr) {

    for (var i = 0; i < arr.length; i++) {

        var newArr = [];
        var count2 = 0;

        for (var j = i; j < arr.length; j++) {

            newArr.push(arr[j])
            // console.log(newArr);

            for (var k = 0; k < newArr.length; k++) {
                if (newArr[k] % 2 == 0 && newArr[newArr.length - 1] % 2 == 1) {
                    count2++
                }
            }
        }
        return count2;
    }
}


function runProgram(input) {

    var Input = input.split("\n")
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var newInput2 = Input[i * 2].split(" ").map(Number);
        var result = findSubString(newInput2);
        console.log(result);
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
