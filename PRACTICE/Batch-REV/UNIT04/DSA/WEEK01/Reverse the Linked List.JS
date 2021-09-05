const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let prev = null;
    let next = null;
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev
}