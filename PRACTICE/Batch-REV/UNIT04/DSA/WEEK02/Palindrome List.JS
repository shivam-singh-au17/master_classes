const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let temp = head;
    let temp1 = head;
    var i = 1;
    var j = 1;
    let res = true;
    while (temp.next) {

        temp = temp.next;
        j++
    }
    while (i < j) {
        if (temp.data === temp1.data) {
            i++;
            j--;
        }
        else {
            res = false;
            return res;
        }
    }
    return res;
};