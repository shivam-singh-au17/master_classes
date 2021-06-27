
function IndiaRank(store, myCountry) {
    for (var i = 0; i < store.length; i++) {
        if (store[i] == myCountry) {
            console.log(i + 1);
        }
    }
}

function runProgram(input) {

    var input = input.split("\n");

    var len = Number(input[0]);
    var store = [];
    for (var i = 1; i <= len; i++) {
        store.push(input[i])
    }

    var myCountry = "India"

    IndiaRank(store, myCountry)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
Russia
USA
Japan
China
India`);
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
