const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function (head) {
    var count = 0;
    var midPoint = head;
    while (head != null) {
        if ((count % 2) == 1)
            midPoint = midPoint.next;
        ++count;
        head = head.next;
    }
    if (midPoint != null)
        return midPoint.data
}