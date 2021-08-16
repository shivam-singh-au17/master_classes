

function solve(str) {
    if (str.length == 0) {
        return 0
    }
    else if (str.length == 1) {
        return Number(str);
    }
    temp = 0
    for (i = 0; i < str.length; i++) {
        temp = temp + Number(str.charAt(i))
    }
    return solve(String(temp))
}


function main(n, k) {
    let ans = solve(String(n)) 
    ans = ans * k
    console.log(solve(String(ans)))
}

main()