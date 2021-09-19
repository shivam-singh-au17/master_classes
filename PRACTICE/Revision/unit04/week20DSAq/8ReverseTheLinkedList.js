
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

function reverse(head) {
    let curt = head
    let prev = null;
    let next = null;
    while (curt !== null) {
        next = curt.next;
        curt.next = prev;
        prev = curt;
        curt = next;
    }
    return prev
}

