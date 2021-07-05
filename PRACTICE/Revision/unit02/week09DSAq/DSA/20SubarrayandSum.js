

function CountLongestSubarrays(arr, k) {

    var sum1 = 0;
    for (var i = 0; i < arr.length; ++i) {
        sum1 += arr[i];
    }

    if ((sum1 % k) != 0) {
        return 1;

    } else {
        var start = 0;

        while (start < arr.length && arr[start] % k == 0) {
            ++start;
        }

        var end = arr.length - 1;

        while (end >= 0 && arr[end] % k == 0) {
            --end;
        }
        

        var len = 0;
        var sum = 0;
        var count = 0;

        if (start == arr.length) {
            return -1;
        }
        else {
            len = Math.max(arr.length - 1 - start, end);
        }

        for (var i = 0; i < len; i++) {
            sum += arr[i];
        }

        if (sum % k != 0) {
            count++;
        }

        for (var i = len; i < arr.length; i++) {
            sum = sum + arr[i];
            sum = sum - arr[i - len];

            if (sum % k != 0) {
                count++;
            }
        }
        return count;
    }
}


function runProgram(input) {

    var Input = input.split("\n");

    var nAndK = Input[0].trim().split(" ").map(Number);
    var k = nAndK[1];
    var arr = Input[1].trim().split(" ").map(Number);

    var ans = CountLongestSubarrays(arr, k);
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