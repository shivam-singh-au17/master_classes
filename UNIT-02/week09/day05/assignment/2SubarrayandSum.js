
function arrSum(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function SubarrayandSum(arr, k) {
    var res = -1;
    for (var i = 0; i < arr.length; i++) {
        var store = [];
        var maxLen = 0
        var count = 0;
        for (var j = i; j < arr.length; j++) {
            store.push(arr[j])
            if ((arrSum(store)) % 3 != 0) {
                maxLen = Math.max(maxLen, store.length);
                if (maxLen > store.length ) {
                    
                    count++;
                }
            }
        }
        return count;
    }
}


function runProgram(input) {

    var Input = input.split("\n");

        var nAndK = Input[0].trim().split(" ").map(Number);
        var k = nAndK[1]
        console.log('k:', k)
        var arr = Input[1].trim().split(" ").map(Number);
        console.log('arr:', arr)

        var ans = SubarrayandSum(arr, k);
        console.log(ans);
    

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 3
2 3 4 6`);
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
