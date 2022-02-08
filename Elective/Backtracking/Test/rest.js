

function swap(a, i, j) {
    let temp;
    let charArry = a.split("");
    temp = charArry[i]
    charArry[i] = charArry[j]
    charArry[j] = temp;
    let res = charArry.join("")
    return res
}


function ProblemPlagiarism(str, low, high) {
    if (low == high) {
        console.log(str);
    } else {
        for (let i = low; i <= high; i++){
            str = swap(str, low, i);
            ProblemPlagiarism(str, low + 1, high);
            str = swap(str, low, i);
        }
    }

}


let str = "123"
let low = 0;
let high = str.length - 1;

ProblemPlagiarism(str, low, high)
