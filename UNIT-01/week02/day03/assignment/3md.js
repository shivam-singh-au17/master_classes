function runProgram(input) {
    var input1 = input.split(" ");
    var left = Number(input1[0]);
    var right = Number(input1[1]);
    var k = Number(input1[2]);
    var count = 0;

    var i = left;
    while (i <= right) {

        if (i % k == 0) {
            count++;
        }
        i++;
    }
    console.log(count);

    
   // if (left == 1) {
    //     for (var i = k; i <= right; i = i + k) {
    //         if (i == i) {
    //             count++
    //         }
    //     }
    //     console.log(count);  
    // } else if (k == 1) {
    //     for (var i = left; i <= right; i = i + k) {
    //         if (i == i) {
    //             count++
    //         }
    //     }
    //     console.log(count);
    // } else {
    //     for (var i = left; i <= right; i = i + k) {
    //         if (i == i) {
    //             count++
    //         }
    //     }
    //     console.log(count);
    // }



}
if (process.env.USERNAME === "shiva") {
    runProgram(`10 100 10`);
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