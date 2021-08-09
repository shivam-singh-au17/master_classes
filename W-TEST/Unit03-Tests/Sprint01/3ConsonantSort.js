
function countConsonant(str) {
    let count = 0;
    if (str[0] != 'a' && str[0] != 'e' && str[0] != 'i' && str[0] != 'o' && str[0] != 'u') {
        count = 1;
    }

    return count;
}

function ConsonantCountArr(strArr) {
    let res = [];
    for (let i = 0; i < strArr.length; i++) {
        res.push(countConsonant(strArr[i]))
    }
    return res;
}

function BubbleSort(myStrArr, str) {

    for (var i = 0; i < myStrArr.length - 1; i++) {
        for (var j = 0; j < myStrArr.length - i - 1; j++) {
            if (myStrArr[j] < myStrArr[j + 1]) {

                var temp = myStrArr[j];
                myStrArr[j] = myStrArr[j + 1];
                myStrArr[j + 1] = temp;

                temp = str[j];
                str[j] = str[j + 1];
                str[j + 1] = temp;

            }
        }
    }
    return str;
}


function printResult(arr) {
    let store = "";
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            store += arr[i];
        } else {
            store += arr[i] + "\n";
        }
    }
    return store;
}


function runProgram(input) {

    let Input = input.split("\n");
    let testCases = Number(Input[0]);

    let temp = 0;
    for (let i = 1; i <= testCases; i++) {

        let NandM = Input[i + temp].split(" ").map(Number);
        let N = NandM[0];

        let myStrArr = []
        for (let j = (i + temp + 1); j <= (i + temp + N); j++) {
            myStrArr.push(Input[j]);
        }

        // console.log('myStrArr:', myStrArr)
        let countArr = ConsonantCountArr(myStrArr);
        // console.log('countArr:', countArr)

        let sortArr = BubbleSort(countArr, myStrArr);
        // console.log('sortArr:', sortArr)

        let ans = printResult(sortArr);
        console.log(ans)

        temp = temp + N;

    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
3 4
vmin
piev
shwa
4 7
ivjljtd
osmpibw
ixbtowe
uaocpzo`);
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

// vmin
// piev
// shwa
// ivjljtd
// osmpibw
// ixbtowe
// uaocpzo