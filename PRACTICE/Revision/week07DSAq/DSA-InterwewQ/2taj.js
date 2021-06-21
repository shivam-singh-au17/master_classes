
function findWineer(arr) {

    var count1 = 0;
    var count2 = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 1) {
            count1++;
        } else {
            count2++;
        }
    }
    if (count1 > count2) {
        return "Tom";
    }else if (count1 < count2) {
        return "Jerry";
    } else {
        return "Another round";
    }

}

function runProgram(input) {

    var data = input.split("\n");
    var winArr = data[1].split(" ").map(Number);
    var ans = findWineer(winArr);
    console.log(ans);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`10
1 1 1 0 0 0 0 0 1 0`);
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

