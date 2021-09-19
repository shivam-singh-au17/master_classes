const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function (head) {
    var count = 0;
    var curt = head;
    while (head != null) {
        if (count % 2 == 1) {
            curt = curt.next;
        }
        count++;
        head = head.next;
    }
    if (curt != null) {
        return curt.data
    }
}
