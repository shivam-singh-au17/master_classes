
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function deleteNode(head, position) {

    let curent = head;
    let count = 1;
    if (position == 0) {
        let nextNode = curent.next.next
        curent.next = nextNode;
        return curent;
    } else {
        while (count != position && curent.next != null) {
            curent = curent.next;
            count++;
        }
        let nextNode = curent.next.next
        curent.next = nextNode;
        return head
    }
}

