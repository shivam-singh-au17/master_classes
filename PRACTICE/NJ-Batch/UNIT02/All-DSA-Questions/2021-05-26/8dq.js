function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var arr1 = [];
    var arr2 = []
    for (let i = 1; i <= n; i++) {
        let [name, age] = input[i].split(" ");
        arr1.push(name)
        arr2.push(Number(age))

    }
    var max = 0;
    for (let j = 0; j < arr2.length; j++) {
        // var max1=Math.max(arr2[j],max)
        if (max < arr2[j]) {
            max = arr2[j]
        }
        // console.log(arr2[j]);
        var sum = arr2.indexOf(max);

    }
    console.log(arr1[sum]);

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