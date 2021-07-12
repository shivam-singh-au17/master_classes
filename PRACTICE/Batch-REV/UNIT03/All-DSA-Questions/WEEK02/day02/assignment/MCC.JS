function runProgram(input) {
    input = input.split('\n');
    let q = [];
    let one = [];
    let two = [];
    let three = [];
    let four = [];
    for (let i = 1; i < input.length; i++) {
        let op = input[i].split(' ');
        if (op[0] == 'E') {
            append([op[1], op[2]], q, one, two, three, four);
        } else {
            console.log(q[0].join(' '))
            remove(q[0], q, one, two, three, four);
        }
    }
};


function remove(elem, q, one, two, three, four) {
    if (elem[0] == 1) {
        if (one.length > 0) {
            q[0] = one[0];
            one.shift();
        } else {
            q.shift()
        }
    } else if (elem[0] == 2) {
        if (two.length > 0) {
            q[0] = two[0];
            two.shift();
        } else {
            q.shift();
        }
    } else if (elem[0] == 3) {
        if (three.length > 0) {
            q[0] = three[0];
            three.shift();
        } else {
            q.shift()
        }
    } else if (elem[0] == 4) {
        if (four.length > 0) {
            q[0] = four[0];
            four.shift();
        } else {
            q.shift();
        }
    }
}
function append(stu, q, one, two, three, four) {
    for (let i = 0; i < q.length; i++) {
        if (q[i][0] == stu[0]) {
            if (stu[0] == '1') one.push(stu)
            else if (stu[0] == '2') two.push(stu);
            else if (stu[0] == '3') three.push(stu);
            else four.push(stu);
            return;
        }
    }
    q.push(stu)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});//Enter code here