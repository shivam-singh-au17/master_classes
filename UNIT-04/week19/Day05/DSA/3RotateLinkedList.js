const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function (head, k) {

    if (head == null) {
        return head;
    }
    
    let temp = head;
    let len = 1;

    while (temp.next != null) {
        temp = temp.next;
        len++;
    }

    if (k > len) {
        k = k % len;
    }

    k = len - k;

    if (k == 0 || k == len) {
        return head;
    }

    let current = head;
    let count = 1;

    while (count < k && current != null) {
        current = current.next;
        count++;
    }

    if (current == null) {
        return head;
    }

    let kthnode = current;
    temp.next = head;
    head = kthnode.next;
    kthnode.next = null;
    return head;
    
}