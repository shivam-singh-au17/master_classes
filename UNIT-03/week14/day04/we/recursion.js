/*

function factorioal(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        let fact = num * factorioal(num - 1);
        return fact;
    }
}

console.log(factorioal(5));

*/


/*

function fibonacci(num) {

   

    // if (num == 0) {
    //     return 0;
    // }
    // if (num == 1) {
    //     return 1;
    // }

    
    
    if (num == 0 || num == 1) {
        return num;
    } else {
        let fibo = fibonacci(num - 1) + fibonacci(num - 2);
        return fibo;
    }

}

console.log(fibonacci(4));

    */

/*

function len(str) {

    if (str == "") {
        return 0;
    } else {
        let res = len(str.substring(1)) + 1;
        return res;
    }

}

console.log(len("masaischool"));

*/