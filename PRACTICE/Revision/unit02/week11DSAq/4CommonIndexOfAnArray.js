

function TwoSortedArrays(arr1, arr2) {

    var i = 0;
    var j = 0;
    var result = "";

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] == arr2[j]) {
            result += arr1[i] + " "
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++
        } else {
            j++;
        }
    }

    if (result != "") {
        return result;
    } else {
        return -1;
    }

}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    let temp = 0;
    for (var i = 1; i <= testCases; i++) {

        var arr1 = Input[i * 2 + temp].trim().split(" ").map(Number);
        var arr2 = Input[i * 4].trim().split(" ").map(Number);


        var ans = TwoSortedArrays(arr1, arr2);
        console.log(ans);

        temp = temp+2
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
6
1 2 3 4 5 6
3
3 3 5
4
1 2 3 4
4
5 6 7 8`);
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


