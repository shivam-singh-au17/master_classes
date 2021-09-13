
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};



function insertNodeAtTail(head, data) {

    let myNode = new LinkedListNode(data);
    let curent = head

    if (curent == null) {
        curent = myNode
        return curent;
    } else {
        while (curent.next != null) {
            curent = curent.next;
        }
        curent.next = myNode;
        return head;
    }

}


function insertNodeAtPosition(head, data, position) {
    let count = 1;
    let curent = head;
    while (count != position) {
        curent = curent.next;
        count++;
    }
    let nextNode = curent.next
    let myNode = new LinkedListNode(data);
    nextNode = myNode;
    myNode.next = nextNode
    return head
}


function insertNodeAtBignig(head = null, data) {

    let myNode = new LinkedListNode(data);
    let curent = head

    if (curent == null) {
        curent = myNode
        return curent;
    } else {
        curent = myNode;
        curent.next = head;
        head = curent
    }

}


function printListData(head) {
    let curent = head;
    while (curent != null) {
        console.log(curent.data);
        curent = curent.next;
    }
}


function deleteTailNode(head) {

    let curent = head;
    let prev = null;
    while (curent.next != null) {
        prev = curent;
        curent = curent.next
    }
    prev.next = null

}

function deleteHeadNode(head) {
    let curent = head;
    if (curent == null) {
        return "empty"
    }
    curent = curent.next;
}

function deleteNode(head, position) {

}

// let head = null;

// insertNodeAtBignig(head, 11)
// printListData(head)

// let t2 = insertNodeAtTail(head, 12)
//  t2 = insertNodeAtBignig(head, 13)

let head = new LinkedListNode(10);
head.next = new LinkedListNode(20)
head.next.next = new LinkedListNode(30)
head.next.next.next = new LinkedListNode(40)
let ans =insertNodeAtBignig(10, 500)
printListData(ans)
// console.log('head11:', head)