

function battleOfOddAndEven(n, arr) {

    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 == 1) {
            oddSum += arr[i]
        } else {
            evenSum += arr[i]
        }
    }

    if (oddSum > evenSum) {
        console.log("Odd");
    } else {
        console.log("Even");
    }

}



