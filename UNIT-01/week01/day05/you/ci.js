/*
The compound interest formula is
CI = p*(1 + i)**nt
*/

var principal = 2000; // this is the principal amount
var rate = .08;  // This is the rate in percent annum
var time = 5; //This is the time in year
var n = 12; //n is the number of times that interest is compounded per unit t
var intrestRate = rate / n; // This is the intrest rate per year
var compoundIntrest = principal * (1 + intrestRate) ** (n*time);
console.log(compoundIntrest);