const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


var fillGaps = function (head) {
    let curnt = head;
    if (head.next == null) {
        return head;
    }
    while (curnt.next != null) {
        if (curnt.next.data != curnt.data + 1) {
            let nextNode = curnt.next;
            let myNode = new LinkedListNode(curnt.data + 1);
            curnt.next = myNode
            myNode.next = nextNode
        }
        curnt = curnt.next
    }
    return head;
};