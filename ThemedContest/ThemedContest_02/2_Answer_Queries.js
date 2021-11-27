
function AnswerQueries(arr, qry) {

    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > qry) {
            high = mid - 1;
        } else if (arr[mid] < qry) {
            low = mid + 1;
        } else {
            return "YES"
        }
    }
    return "NO";

}




function runProgram(input) {
    
    let newInput = input.split("\n");
    let arr = newInput[1].split(" ").map(Number);
    // arr.sort((a, b) => { return a - b });
    let qry = newInput[3].split(" ").map(Number);
    for (let i = 0; i < qry.length; i++) {
        let obj = AnswerQueries(arr, qry[i])
        console.log(obj)
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5
1 2 3 4 5
3
3 5 7`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\len$/, "");
        read = read.replace(/\len$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\len$/, "");
        runProgram(read);
        process.exit(0);
    });
}






// function binarySearch(arr, l, r, x) {
//     if (r >= l) {
//         let mid = l + Math.floor((r - l) / 2);

//         if (arr[mid] == x)
//             return mid;

//         if (arr[mid] > x)
//             return binarySearch(arr, l, mid - 1, x);

//         return binarySearch(arr, mid + 1, r, x);
//     }

//     // We reach here when element is not
//     // present in array
//     return -1;
// }

// let arr = [2, 3, 4, 10, 40];
// let x = 10;
// let len = arr.length
// let result = binarySearch(arr, 0, len - 1, x);
// console.log('result:', result)

// function binarySearch(arr, x) {
//     let l = 0;
//     let r = arr.length - 1;
//     let mid;
//     while (r >= l) {
//         mid = l + Math.floor((r - l) / 2);
//         if (arr[mid] == x)
//             return mid;
//         if (arr[mid] > x)
//             r = mid - 1;
//         else
//             l = mid + 1;
//     }

//     return -1;
// }

// let arr = new Array(2, 3, 4, 10, 40);
// let x = 10;
// let n = arr.length;
// let result = binarySearch(arr, x);
// console.log('result:', result)