
/*

// GENERATE ALL SUB-SEQUENCES

function funMake(res, arr, low, high) {
    if (low <= high + 1 && res != "") {
        console.log(res);
    }

    for (let i = low; i <= high; i++) {
        funMake(res + arr[i], arr, i + 1, high)
    }
}


function maun() {

    // let str = "abc";
    let arr = ['a', 'b', 'c', 'd'];
    let low = 0;
    let high = arr.length - 1;
    let res = "";
    funMake(res, arr, low, high)

}

maun()

*/



// GENERATE ALL VALID PARANTHESIS

function makeValid(res, open, close, num) {
    if (res.length == 2 * num) {
        console.log(res);
        return;
    }
    if (open < num) {
        makeValid(res + "(", open + 1, close, num);
    }
    if (open > close) {
        makeValid(res + ")", open, close + 1, num);
    }
}


function main() {
    let res = ""
    let open = 0
    let close = 0;
    let num = 3;
    makeValid(res, open, close, num)
}

main()