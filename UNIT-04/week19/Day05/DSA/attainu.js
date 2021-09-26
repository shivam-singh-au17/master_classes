
// function Persion(name, age, gender) {
//     this.name = name,
//         this.age = age,
//         this.gender = gender
// }

// let myData = new Persion("Shivam", 23, "Male")
// console.log('myData:', myData)


class MyNode {
    constructor(data) {
        this.myData = data
        this.myNext = null
    }
}

let myObj = new MyNode(10)
myObj.myNext = new MyNode(20)
myObj.myNext.myNext = new MyNode(30)

let head = myObj;
while (head != null) {
    console.log(head.myData);
    head = head.myNext
}


// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// let middleNode = function (head) {
//     let count = 0;
//     let midPoint = head;
//     while (head != null) {
//         if ((count % 2) == 1)
//             midPoint = midPoint.next;
//         ++count;
//         head = head.next;
//     }
//     if (midPoint != null)
//         return midPoint.data
// }


// let rotateRight = function (head, temp) {
//     if (temp == 0) {
//         return;
//     }
//     let current = head;
//     let count = 1;
//     while (count < temp && current != null) {
//         current = current.next;
//         count++;
//     }
//     if (current == null) {
//         return;
//     }
//     let kthNode = current;

//     while (current.next != null) {
//         current = current.next;
//     }
//     current.next = head;
//     head = kthNode.next;
//     kthNode.next = null;
//     return head

// }

// var rotateRight = function (head, temp) {
//     if (head == null) { return head; }
//     let tmp = head;
//     let len = 1;
//     while (tmp.next != null) {
//         tmp = tmp.next;
//         len++;
//     }
//     if (temp > len) { temp = temp % len; }
//     temp = len - temp;
//     if (temp == 0 || temp == len) { return head; }
//     let current = head;
//     let count = 1;
//     while (count < temp && current != null) {
//         current = current.next;
//         count++;
//     }
//     if (current == null) { return head; }
//     let kthnode = current;
//     tmp.next = head;
//     head = kthnode.next;
//     kthnode.next = null;
//     return head;
// }






// function printMiddle(head) {
//     let count = 0;
//     let midPoint = head;
//     while (head != null) {
//         if ((count % 2) == 1)
//             midPoint = midPoint.next;
//         ++count;
//         head = head.next;
//     }
//     if (midPoint != null)
//         return midPoint.data
// }



