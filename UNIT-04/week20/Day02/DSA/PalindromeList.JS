const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


var isPalindrome = function (head) {

    let temp1 = head;
    let temp2 = head;
    var res1 = 1;
    var res2 = 1;
    let ans = true;

    while (temp1.next != null) {
        temp1 = temp1.next;
        res2++
    }

    while (res1 < res2) {
        if (temp1.data === temp2.data) {
            res1++;
            res2--;
        }
        else {
            ans = false;
            return ans;
        }
    }
    return ans;

};