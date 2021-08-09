
/*

// Simple sum of any number

function findSum(num) {
    if (num == 1) {
        return 1;
    } else {
        return num + findSum(num - 1)
    }
}

let ans = findSum(5);
console.log('ans:', ans)

*/


/*

// 1. Tail - Recurdion

function find(num) {
    if (num == 0) {
        return;
    } else {
        console.log(num);
        find(num - 1)
    }
}

find(4);

*/





/*

// 1. Head - Recurdion

function find(num) {
    if (num == 0) {
        return;
    } else {
        find(num - 1)
        console.log(num);
    }
}

find(4);

*/




/*

// 1. Tree - Recurdion

function find(num) {
    if (num == 0) {
        return;
    } else {
        console.log(num);
        find(num - 1);
        find(num - 1);
    }
}

find(3);


*/





/*

// 1. In Direct - Recurdion

function find2(num) {
    if (num < 1) {
        return;
    } else {
        console.log(num);
        find1(Math.floor(num / 2));
    }
}


function find1(num) {
    if (num == 0) {
        return;
    } else {
        console.log(num);
        find2(num - 1);
    }
}

find1(10);


*/


function fibonacci( n)
{
    if (n <= 1)
        return n
    else
        return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5));

