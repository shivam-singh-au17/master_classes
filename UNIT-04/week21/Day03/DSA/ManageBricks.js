function manageBricks(arr) {

    let pastCount = 1;
    let prasentCount = 0;
    let pastWidth = arr[0];
    let paesentWidth = 0;
    let count = 1;

    for (let i = 1; i < arr.length; i++) {

        paesentWidth += arr[i];
        prasentCount += 1;

        if (paesentWidth > pastWidth && prasentCount > pastCount) {

            pastWidth = paesentWidth;
            pastCount = prasentCount;
            prasentCount = 0;
            paesentWidth = 0;
            count++;

        }
    }

    return count;
}


function runProgram(input) {

    let newData = input.split("\n");
    let arr = newData[1].split(" ").map(Number);
    arr.sort((a, b) => { return a - b });
    let count = manageBricks(arr);
    console.log(count)

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4
40 100 20 30
`);
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