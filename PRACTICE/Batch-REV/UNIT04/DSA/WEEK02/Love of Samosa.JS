
function LoveOfSamosa(arr, k) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i <= arr.length; i++) {

        if (sum + arr[i] <= k) {
            sum += arr[i]
            count++;
        } else {
            break;
        }
    }
    return count
}


function runProgram(input) {

    let Input = input.split("\n");

    let NandK = Input[0].split(" ").map(Number);
    let k = NandK[1];

    let arr = Input[1].split(" ").map(Number);
    arr.sort((a, b) => { return a - b });

    console.log(LoveOfSamosa(arr, k));
    
}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4 10
5 4 2 4`);
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