

// TODO:





function runProgram(input) {

    let newData = input.split("\n");
    let testCases = Number(newData[0]);

    for (let i = 1; i <= testCases; i++) {

        let arr1 = newData[i * 2 + i - 1].split(" ").map(Number);
        arr1.sort((a, b) => { return a - b });
        console.log('arr1:', arr1)
        let arr2 = newData[i * 2 + i].split(" ").map(Number);
        arr2.sort((a, b) => { return a - b });
        console.log('arr2:', arr2)

       
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
4 5
2 5 6 8
3 8 5 1 7
3 3
3 2 4
6 8 7`);
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