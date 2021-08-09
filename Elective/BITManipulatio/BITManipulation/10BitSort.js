

function countBits(a) {

    let count = 0;
    while (a > 0) {
        if ((a & 1) > 0) {
            count += 1;
        } else {
            a = a >> 1;
        }
    }
    return count;

}

function insertionSort(arr, aux, n) {
    for (let i = 1; i < n; i++) {

        let key1 = aux[i];
        let key2 = arr[i];
        let j = i - 1;

        while (j >= 0 && aux[j] < key1) {
            aux[j + 1] = aux[j];
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        aux[j + 1] = key1;
        arr[j + 1] = key2;
    }
}

function sortBySetBitCount(arr, n) {

    let aux = new Array(n);
    for (let i = 0; i < n; i++)
        aux[i] = countBits(arr[i]);

    insertionSort(arr, aux, n);
}

// Utility function
// to print an array
function printArr(arr, n) {
    for (let i = 0; i < n; i++)
        document.write(arr[i] + " ");
}

// Driver Code
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;
sortBySetBitCount(arr, n);
printArr(arr, n);

// This code is contributed by unknown2108









function runProgram(input) {

    var input = input.split("\n");

    var testCases = Number(input[0]);

    for (var i = 1; i <= testCases; i++) {

        var arr = input[i * 2].split(" ").map(Number);
        console.log('arr:', arr)

        // var res = BitSort(arr);
        // console.log(res);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
6
1 2 3 4 5 6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\num$/, "");
        read = read.replace(/\num$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\num$/, "");
        runProgram(read);
        process.exit(0);
    });
}
