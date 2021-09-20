
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


function insertNodeAtPosition(head, data, position) {

    let curent = head;
    let myNode = new LinkedListNode(data);
    let count = 1;
    if (position == 0) {
        let nextNode = curent
        curent = myNode;
        myNode.next = nextNode
        return curent;
    } else {
        while (count != position && curent.next != null) {
            curent = curent.next;
            count++;
        }
        let nextNode = curent.next
        curent.next = myNode;
        myNode.next = nextNode
        return head
    }

}


var fillGaps = function (head) {

    let curnt = head;
    if (head.next == null) {
        return head;
    }
    let position = 1;
    while (curnt.next != null) {
        if (curnt.next.data == curnt.data + 1) {
            curnt = curnt.next;
            position++
        } else {
            curnt.next = insertNodeAtPosition(curnt, (curnt.data + 1), position)
        }
    }

};