

// TODO:

function runProgram(input) {
    var arr1 = input;
    var arr2 = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[arr2.length - 1]) {
            arr2.pop();
        }
        else {
            arr2.push(arr1[i]);
        }
    }
    var arr2 = arr2.join("");
    if (arr2 == "") {
        console.log("Empty String");
    }
    else {
        console.log(arr2);
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