
// Insert a node at the Tail



function insertNodeAtTail(head, data) {

    let myNode = new LinkedListNode(data);
    let temp = head

    if (temp == null) {
        temp = myNode
        return temp;
    } else {
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = myNode;
        return head;
    }

}





// Deleting a Node


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






// Insert at a specific position



function insertNodeAtPosition(head, data, position) {

    let curent = head;
    let myNode = new LinkedListNode(data);
    let count = 1;
    if (position == 0) {
        let nextNode = curent
        curent = myNode;
        curent.next = nextNode
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




// Reverse the Linked List




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





// Middle Node



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





// Rotate Linked List

var rotateRight = function (head, k) {

    if (head == null) {
        return head;
    }

    let tmp = head;
    let len = 1;
    while (tmp.next != null) {
        tmp = tmp.next;
        len++;
    }

    if (k > len) {
        k = k % len;
    }

    k = len - k;
    if (k == 0 || k == len) {
        return head;
    }

    let current = head;
    let count = 1;
    while (count < k && current != null) {
        current = current.next;
        count++;
    }

    if (current == null) {
        return head;
    }

    let kthnode = current;
    tmp.next = head;
    head = kthnode.next;
    kthnode.next = null;
    return head;

}


