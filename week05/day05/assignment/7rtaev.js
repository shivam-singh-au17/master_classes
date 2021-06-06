
function rotateArr(nums, k) {
    var nawOutput = "";
    for (var i = nums.length - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    for (var j = k - 1; j >= 0; j--) {
        nums[j] = nums.pop();
    }
    return nums;
}

function printResult(nums) {
    var newRes = "";
    for (var i = 0; i < nums.length; i++){
        newRes += nums[i] + " ";
    }
    return newRes;
}

function runProgram(input) {
    var Input = input.split("\n");

    var testCase = Number(Input[0]);

    for (var i = 1; i <= testCase; i++){

        var newInput1 = Input[i * 2 - 1].split(" ").map(Number);
        var k = newInput1[1]
        var newInput2 = Input[i * 2].split(" ").map(Number);

        var result = rotateArr(newInput2, k);
        var ans = printResult(result);
        console.log(ans);
    }


}
if (process.env.USERNAME === "shiva") {
    runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);
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



// var rotate = function (nums, k) {
    // i.e. nums = [1, 2, 3, 4, 5, 6, 7],  k = 3
    // for (let i = nums.length - 1; i >= 0; i--) {
        // nums[i + k] = nums[i];
        // i = 6,  k = 3
        // nums[i + k] = nums[i]
        // nums[6 + 3] = nums[6]
        // nums[9] = 7              nums = [1, 2, 3, 4, 5, 6, 7, , , 7]

        // i = 5,  k = 3
        // nums[i + k] = nums[i]
        // nums[5 + 3] = nums[5]
        // nums[8] = 6              nums = [1, 2, 3, 4, 5, 6, 7, , 6, 7]

        // i = 4,  k = 3
        // nums[i + k] = nums[i]
        // nums[4 + 3] = nums[4]
        // nums[7] = 5              nums = [1, 2, 3, 4, 5, 6, 7, 5, 6, 7]

        // i = 3,  k = 3
        // nums[i + k] = nums[i]
        // nums[3 + 3] = nums[3]
        // nums[6] = 4              nums = [1, 2, 3, 4, 5, 6, 4, 5, 6, 7]

        // i = 2,  k = 3
        // nums[i + k] = nums[i]
        // nums[2 + 3] = nums[2]
        // nums[5] = 3              nums = [1, 2, 3, 4, 5, 3, 4, 5, 6, 7]

        // i = 1,  k = 3
        // nums[i + k] = nums[i]
        // nums[1 + 3] = nums[1]
        // nums[4] = 2              nums = [1, 2, 3, 4, 2, 3, 4, 5, 6, 7]

        // i = 0,  k = 3
        // nums[i + k] = nums[i]
        // nums[0 + 3] = nums[0]
        // nums[3] = 1              nums = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
    // }

    // for (let j = k - 1; j >= 0; j--) {
        // nums = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
        // nums[j] = nums.pop();

        // j = 2
        // nums[j] = nums.pop()
        // nums[2] = 7               nums = [1, 2, 7, 1, 2, 3, 4, 5, 6]

        // j = 1
        // nums[j] = nums.pop()
        // nums[1] = 6               nums = [1, 6, 7, 1, 2, 3, 4, 5]

        // j = 0
        // nums[j] = nums.pop()
        // nums[0] = 5               nums = [5, 6, 7, 1, 2, 3, 4]
    // }

    // nums = [5, 6, 7, 1, 2, 3, 4]

    // Time comlexity = O(a + b)
// };