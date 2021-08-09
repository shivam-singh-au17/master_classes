

function goingForward(arr, k) {

    let temp = arr[k - 1]
    
    let count = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= temp && arr[i] > 0) {
            count += 1
        }
    }
    return count;
    
}


function runProgram(input) {

    var Input = input.trim().split("\n");

    var nAndk = Input[0].split(" ").map(Number);
    var k = nAndk[1]
    var arr = Input[1].split(" ").map(Number);

    var ans = goingForward(arr, k);
    console.log(ans)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`8 5
10 9 8 7 7 7 5 5`);
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
