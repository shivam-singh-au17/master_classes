


function addTwoNum(num) {
    let sqr = 0;
    while (num != 0) {
        let digit = num % 10;
        sqr += digit * digit;
        num = parseInt(num / 10, 10);
    }
    return sqr;
}


function findBeautiful(num) {

    while (true) {

        if (num == 1) {
            return true;
        }
        num = addTwoNum(num);
        if (num == 4) {
            return false;
        }
    }

}

function beautifulNumber(L1, L2) {
    let sum = 0;
    for (let i = L1; i <= L2; i++) {
        if (findBeautiful(i)) {
            sum += i;
        }
    }
    return sum;
}


console.log(beautifulNumber(7, 7) );


