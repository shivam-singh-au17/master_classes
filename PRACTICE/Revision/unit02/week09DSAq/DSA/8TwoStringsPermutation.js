
function StringsPermutation(str1, str2) {

    if (str1.length != str2.length) {
        return "No"

    } else {

        var obj1 = {}
        var obj2 = {}
        for (let i = 0; i < str1.length; i++) {

            var key1 = str1[i]
            if (obj1[key1] == undefined) {
                obj1[key1] = 1;
            }
            else {
                var prev1 = obj1[key1]
                obj1[key1] = prev1 + 1
            }


            var key2 = str2[i]
            if (obj2[key2] == undefined) {
                obj2[key2] = 1;
            }
            else {
                var prev2 = obj2[key2]
                obj2[key2] = prev2 + 1
            }


        }

        console.log(obj1);
        console.log(obj2);

        var sum = 0;
        for (var key1 in obj1) {
            for (var key2 in obj2) {
                if (key1 == key2) {
                    if (obj1[key1] == obj2[key2]) {
                        sum += obj1[key1]
                    }
                }
            }
        }

        console.log(sum);

        if (sum == str1.length) {
           return 'Yes'
        }
        else {
            return 'No'
        }


    }

}

function runProgram(input) {

    var Input = input.split("\n");

    var str1 = Input[0].split("");
    var str2 = Input[1].split("");

    var ans = StringsPermutation(str1, str2);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`z
b`);
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
