const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


var hasCycle = function (head) {
    let temp = head;
    while (temp.next !== null && temp.next !== head) {
        temp = temp.next
    }

    if (temp.next === null) {
        return false;
    }
    if (temp.next === head) {
        return true;
    }

}