function helperFun(arr, store, temp) {
    if (store.length == arr.length) {
        let res = store.slice(0);
        console.log(res.join(" "));
    }
    for (let i = 0; i < arr.length; i++) {
        if (!temp[i]) {
            temp[i] = true;
            store.push(arr[i]);
            helperFun(arr, store, temp);
            temp[i] = false;
            store.pop();
        }
    }
}


function Permutations(arr) {
    let temp = [];
    let store = [];
    let ans = helperFun(arr, store, temp);
    return ans;
}


function runProgram(input) {

    let Input = input.trim().split("\n");

    let arr = Input[1].split(" ");
    Permutations(arr)

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
1 2 3`);
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