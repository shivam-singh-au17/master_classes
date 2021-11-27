function checkPalindrome(N, str) {

    let newStr = "";
    let oldStr = "";
    for (let i = 0; i < N; i++) {
        oldStr += str[i];
    }
    for (let i = N - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if (oldStr == newStr) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}