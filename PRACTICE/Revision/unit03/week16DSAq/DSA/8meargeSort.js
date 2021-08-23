
function mergeArr(arr, lb, mid, ub) {

    let i = lb;
    let j = mid + 1;
    let k = lb;
    let arrB = [];

    while (i <= mid && j <= ub) {
        if (arr[i] <= arr[j]) {
            arrB[k] = arr[i];
            i++;
            k++;
        } else {
            arrB[k] = arr[i];
            j++;
            k++;
        }
    }

    if (i > mid) {
        while (j <= ub) {
            arrB[k] = arr[j];
            j++;
            k++;
        }
    } else {
        while (i <= mid) {
            arrB[k] = arr[i];
            i++;
            j++;
        }
    }

    // for (let k = lb; k <= ub; k++) {
    //     arr[k] = arrB[k]
    // }

    // return arrB;

}





function mergeSort(arr, lb, ub) {

    if (lb >= ub) {
        return arr;
    } else {
        let mid = Math.floor((lb + ub) / 2);
        mergeSort(arr, lb, mid);
        mergeSort(arr, mid + 1, ub);
        mergeArr(arr, lb, mid, ub);
    }

}


function callAllFun(arr) {
    let lb = 0;
    let ub = arr.length;
    return mergeSort(arr, lb, ub)
}


function runProgram(input) {

    var newData = input.split("\n");

    let arr = newData[1].split(" ").map(Number);
    console.log('arr:', arr)

    console.log(callAllFun(arr))

}



if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 5 0 9 8`);
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
