
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


var checkWavePattern = function (head) {

    let curnt = head;
    if (head.next == null) {
        return true;
    }
    let i = 0;
    let temp = false;
    while (curnt.next != null) {
        if (i % 2 == 1 && curnt < curnt.next && curnt.next > curnt.next.next) {
            temp = true
        } else if (i % 2 == 0 && curnt > curnt.next && curnt.next < curnt.next.next) {
            temp = true
        }
        curnt = curnt.next
        i++;
    }
    return temp;
};