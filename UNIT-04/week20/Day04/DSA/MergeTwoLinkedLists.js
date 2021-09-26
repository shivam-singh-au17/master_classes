const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};


var mergeTwoLists = function (l1, l2) {
    let result = null;

    if (l1 == null) return l2;
    if (l2 == null) return l1;

    result = (l1.val <= l2.val) ? l1 : l2;
    result.next = (l1.val <= l2.val) ? mergeTwoLists(l1.next, l2) : mergeTwoLists(l1, l2.next);

    return result;

};