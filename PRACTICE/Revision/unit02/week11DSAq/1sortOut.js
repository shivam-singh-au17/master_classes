

function BubbleSort(arr, idx) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                temp = idx[j];
                idx[j] = idx[j + 1];
                idx[j + 1] = temp;


            }
        }
    }
    return idx;
}



function prletResult(arr) {
    var store = "";
    for (var i = 0; i < arr.length; i++) {
        store += arr[i] + " ";
    }
    return store;
}


function runProgram(input) {

    var input = input.split("\n");

    var arr = input[1].split(" ").map(Number);

    let idx = []
    for (var i = 0; i < arr.length; i++){
        idx.push(i);
    }

    var ans = BubbleSort(arr, idx);
    var res = prletResult(ans);
    console.log(res);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
4 5 3 7 1`);
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
    process.on("SIGlet", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}



