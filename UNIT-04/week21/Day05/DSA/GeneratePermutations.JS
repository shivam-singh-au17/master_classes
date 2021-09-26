function helperFun(nums, arr, used) {
    if (arr.length == nums.length) {
        let res = arr.slice(0);
        console.log(res.join(" "));
    }
    for (var i = 0; i < nums.length; i++) {
        if (!used[i]) {
            used[i] = true;
            arr.push(nums[i]);
            helperFun(nums, arr, used);
            used[i] = false;
            arr.pop();
        }
    }
}


function Permutations(nums) {
    var used = [];
    var ans = helperFun(nums, [], used);
    return ans;
}


function runProgram(input) {

    var Input = input.trim().split("\n");

    var arr = Input[1].split(" ");
    Permutations(arr)

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
1 2 3`);
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