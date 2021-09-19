const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head, n) {

    let listLen = 0
    let curent = head
    while (curent.next != null) {
        curent = curent.next;
        listLen++;
    }

    let newLen = (listLen - n) + 1;
    let count = 1
    while (count != newLen && curent.next != null) {
        curent = curent.next;
        count++;
    }
    return head.next.data

}
