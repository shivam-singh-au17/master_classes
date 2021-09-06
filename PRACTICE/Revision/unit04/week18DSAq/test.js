
function SquareRoot(num) {

    let low = 0;
    let high = num;

    while (low < high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (mid * mid <= num) {
            low = mid + 1;
        } else {
            high = mid;
        }

    }
    return low - 1;
}
