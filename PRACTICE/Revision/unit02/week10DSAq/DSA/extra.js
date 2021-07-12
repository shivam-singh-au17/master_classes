

function countSubstrings(str, K) {
    var N = str.length;

    var answer = 0;

    var map = new Map();

    for (var i = 0; i < K; i++) {

        if (map.has(str[i]))
            map.set(str[i], map.get(str[i]) + 1)
        else
            map.set(str[i], 1)
    }

    if (map.size == K)
        answer++;

    for (var i = K; i < N; i++) {

        if (map.has(str[i]))
            map.set(str[i], map.get(str[i]) + 1)
        else
            map.set(str[i], 1)
     
        if (map.has(str[i - K]))
            map.set(str[i - K], map.get(str[i - K]) - 1)

        if (map.has(str[i - K]) && map.get(str[i - K]) == 0) {
            map.delete(str[i - K]);
        }

        if (map.size == K) {
            answer++;
        }
    }

    return answer;
}

// Driver code
// string str
var str = "abcc";
// integer K
var K = 2;
// Print the count of K length
// substrings with k distinct characters
console.log(countSubstrings(str, K));
