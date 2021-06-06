let arr = [ 1, 3, 5, 7, 9 ];
let n = arr.length;
let k = 2;

function leftRotate(arr, n, k){
        let mod = k % n;
	for (let i = 0; i < n; i++)
		document.write((arr[(mod + i) % n]) + " ");

	document.write("\n");
}


leftRotate(arr, n, k);
document.write("<br>");

    k = 3;
    leftRotate(arr, n, k);
document.write("<br>");

        k = 4;
        leftRotate(arr, n, k);


