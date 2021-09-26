var mergeTwoLists = function (l1, l2) {
    if (l1 == null)
        return l2;
    if (l2 == null)
        return l1;

    if (l1.data > l2.data) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    } else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
};





var mergeTwoLists = function (l1, l2) {

    let tempNode = new ListNode(0);
    let last = tempNode;

    while (true) {
        if (l1 == null) {
            last.next = l2;
            break;
        }
        if (l2 == null) {
            last.next = l1;
            break;
        }
        if (l1.data <= l2.data) {
            last.next = l1;
            l1 = l1.next;
        }
        else {
            last.next = l2;
            l2 = l2.next;
        }
        last = last.next;
    }
    return tempNode.next;
}



var mergeTwoLists = function (l1, l2) {
    if (l1 == null)
        return l2;
    if (l2 == null)
        return l1;

    if (l1.data < l2.data) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};