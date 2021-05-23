
function grterThanK(items, k) {
    var count = 0;
    for (var i = 0; i < items.length; i++){
        if (items[i] > k) {
            count++;
        }
        if (count == 2) {
            return i - 1;
        }
        
    }
    if (count < 2) {
        return items.length
    }

}

function runProgram(input) {

    var Input = input.split("\n");
    var newInput1 = Input[0].split(" ").map(Number);
    var newInput2 = Input[1].split(" ").map(Number);
  
    var ans = grterThanK(newInput2, newInput1[1]);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`7 6
4 3 8 6 7 2 2`);
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
