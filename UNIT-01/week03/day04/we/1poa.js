
function arrayProduct(items) {
    var prod = 1;
    for (var i = 0; i < items.length; i++) {
        prod = prod * items[i];
    }
    return prod;
}

function arrayProdDivide(items, prod) {
    var prodDivide = [];
    for (var i = 0; i < items.length; i++) {
        prodDivide.push(prod / items[i]);
    }
    return prodDivide;
}

function printArray(items) {
    var output = "";
    for (var i = 0; i < items.length; i++) {
        output = output + items[i];
        if (i != items.length - 1) {
            output = output + " ";
        }
    }
    console.log(output);
}

function runProgram(input) {

    var isSplit = input.split(/[\r\n]+/);
    var times = Number(isSplit[0]);

    for (var i = 1; i <= times; i++) {
        var number = isSplit[i * 2].split(" ").map(Number);
        var p = arrayProduct(number);
        var prodDA = arrayProdDivide(number, p);
        printArray(prodDA)
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