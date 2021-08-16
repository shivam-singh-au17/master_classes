
/*

// GCD Easy

function GCD(a, b) {
    if (a == 0) {
        return b;
    } else {
        return GCD(b % a, a);
    }
}

console.log(GCD(51, 68));

*/



/*

// SANTOSH AND PROFIT

function santoshProfit(num) {

    if (num % 2 == 1 || num < 0) {
        return 0;
    }
    if (num == 4) {
        return 1;
    }
    if (num == 8) {
        return 2;
    }
    else {
        return santoshProfit(num - 4) + santoshProfit(num - 8)
    }

}

console.log(santoshProfit(12));

*/



/*

// REVERSE STACK USING RECURSION

let stack = [];

function reverseStack() {
    
}

*/



/*

// REMOVE DUPLICATES

function strRmoove(str) {
    if (str.length == 0) {
        return "Empty String"
    }
    if (str.length == 1) {
        return str;
    }
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            if (str.charAt(i) != str.charAt(i + 1)) {
                temp += str.charAt(i)
            }
        }
        if (i == str.length - 1) {
            if (str.charAt(i) != str.charAt(i - 1)) {
                temp += str.charAt(i)
            }
        } else {
            if (str.charAt(i) != str.charAt(i-1) && str.charAt(i) != str.charAt(i+1)) {
                temp += str.charAt(i)
            }
        }
    }
    if (str.length == temp.length) {
        return temp;
    } else {
        return strRmoove(temp)
    }
}

console.log(strRmoove("abbaccd"));

*/



/*

// DIGITAL SUM  only given num  121=> 121

function findSum(num) {
    if (num >= 1 && num <= 9) {
        return num;
    } else {
        return (num/10) + findSum(num/10)
    }
}

function mainFindSum(num) {
    let res = findSum(num)
    while (res >= 10) {
        res = findSum(res)
    }
    return res;
}

console.log(mainFindSum(121));

*/



// /*

// DIGITAL SUM  only given num  121=> 121

function findSum(num) {
    if (num >= 1 && num <= 9) {
        return num;
    } else {
        return (num/10) + findSum(num/10)
    }
}

function mainFindSum(num) {
    let res = findSum(num)
    while (res >= 10) {
        res = findSum(res)
    }
    return res;
}

console.log(mainFindSum(121));

// */