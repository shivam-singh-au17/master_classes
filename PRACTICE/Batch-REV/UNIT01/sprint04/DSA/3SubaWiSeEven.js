
function findSubString(arr, num) {

    var count2 = 0;
    for (var i = 0; i < arr.length; i++) {
        var newArr = [];
        for (var j = i; j < arr.length; j++) {
            newArr.push(arr[j])
            // console.log(newArr);
            var count = 0;
            for (var k = 0; k < newArr.length; k++) {
                if (newArr[k] % 2 == 0) {
                    count++
                }
                if (count == num && newArr[k] % 2 == 0) {
                    count2++
                }else if (count > num) {
                    count2--
                }
            }
        }
    }
    return count2;
}


function runProgram(input) {

    var Input = input.split("\n")

    var newInput1 = Input[0].split(" ").map(Number);
    var k = newInput1[1];
    var newInput2 = Input[1].split(" ").map(Number);

    var result = findSubString(newInput2, k);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 2
2 3 4 6`);
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
