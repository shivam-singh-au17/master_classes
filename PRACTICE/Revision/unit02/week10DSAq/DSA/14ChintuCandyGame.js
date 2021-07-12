
// TODO:



function main() {
    let t, n, a;
    cin >> t;
    for (let i = 0; i < t; i++) {
        cin >> n;
        a = 0;
        while (n >= 10) {
            a += let(n / 10) * 10;
            n = n / 10 + n % 10;
        }
        cout << a + n << endl;
    }

    return 0;
    
}