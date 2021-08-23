
let str = "abc";
let s = 0;
let e = str.length - 1;


function swap(str, s, i) {
    let temp = str[i];
    str[i] = str[s];
    str[s] = temp;
    return str;
}

function myFun(str, s, e) {
    if (str[s] == str[e]) {
        console.log(str);
    } else {
        for (let i = s; i <= e; i++) {
            str = swap(str, s, i);
            myFun(str, s + 1, e)
        }
    }
}

myFun(str, s, e);
