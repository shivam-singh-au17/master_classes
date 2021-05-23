
function arrayProduct(items) {
    var prod = 1;
    for (var i = 0; i < items.length; i++) {
        prod = prod * items[i];
    }
    return prod;
}

function arrayProdDivide(items, prod) {
    var arrayProd = [];
    for (var i = 0; i < items.length; i++) {
        arrayProd.push(prod / items[i])
    }
    return arrayProd;
}

function printResult(items) {
    var res = "";
    for (var i = 0; i < items.length; i++) {
        res += items[i] + " ";
    }
    return res;
}

function runProgram(input) {

    var Input = input.split("\n");
    var inputTimes = Number(Input[0]);

    for (var i = 1; i <= inputTimes; i++) {

        var newInput = Input[i * 2].split(" ").map(Number);
        
        var ans1 = arrayProduct(newInput);
        var ans2 = arrayProdDivide(newInput, ans1);
        var ans3 = printResult(ans2);
        console.log(ans3);
    }


}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 2 3 4 5
3
3 2 7`);
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





