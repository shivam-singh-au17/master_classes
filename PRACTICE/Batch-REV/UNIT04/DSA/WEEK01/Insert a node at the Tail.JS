const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function insertNodeAtTail(head, data) {


    var node = new LinkedListNode(data);
    var temp = head;
    if (temp == null) {
        temp = node
        return temp;
    }
    while (temp.next != null) {
        temp = temp.next;
    }
    temp.next = node;
    return head;
}