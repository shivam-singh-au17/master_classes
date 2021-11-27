


let q = [];

function checkSorted(n) {
    let st = [];
    let expected = 1;
    let fnt;

    while (q.length != 0) {
        fnt = q[0];
        q.shift();

        if (fnt == expected)
            expected++;

        else {

            if (st.length == 0) {
                st.push(fnt);
            }


            else if (st.length != 0 &&
                st[st.length - 1] < fnt) {
                return false;
            }

            else
                st.push(fnt);
        }

        while (st.length != 0 &&
            st[st.length - 1] == expected) {
            st.pop();
            expected++;
        }
    }

    if ((expected - 1) == n && st.length == 0)
        return true;

    return false;
}


let q2 = [5, 1, 2, 4, 3]
let n = q2.length;

if (checkSorted(n))
    console.log("Yes");
else
    console.log("No");


