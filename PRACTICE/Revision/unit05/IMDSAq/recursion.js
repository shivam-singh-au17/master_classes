function FactorialRecursion(num) {

    if (num == 1) {
        return 1;
    } else {
        let res = num * FactorialRecursion(num - 1);
        return res;
    }

}




function runProgram(input) {
    var input = input.split("\n");
    var n = +input;
    function febonacci(n) {
        if (n <= 1) {
            return n;
        }
        return febonacci(n - 1) + febonacci(n - 2)
    }
    var x = febonacci(n);
    console.log(x)


}