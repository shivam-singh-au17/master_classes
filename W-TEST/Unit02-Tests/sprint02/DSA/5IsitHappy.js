
var isHappy = function (n) {
    let fast = n,
        slow = n;
    while (true) {
        slow = squared(slow);
        fast = squared(squared(fast));
        if (fast == slow) {
            break;
        }
    }
    return slow == 1;
}

function squared(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var num = Input[i];
        var ans = isHappy(num);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
19
2
312082396
`);
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















//  n = int(input("Enter a no."))
// # l = len(n)

// # sum = 0
// ctr = 0
// d = dict()

// while n != 1:
//     if n in d:
//         print("Not happy")
// exit()
// d[n] = True
// n = list(str(n))
// l = len(n)
// sum = 0
// ctr += 1
//     # print("iteration number", ctr)
// for i in range(l):
//         # print(n[i])
// sum = sum + int(n[i]) ** 2
//         # print(sum)
// n = sum

// print("is happy")
// # while n > 0:
// #     n = n / 10
