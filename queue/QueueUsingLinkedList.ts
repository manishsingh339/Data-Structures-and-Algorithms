class LinkedListNode {
    data: any;
    next: any;
    
    /**
     * Construct a new linked list element.
     * @param data - The data to store in the element.
     */
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class QueueUsingLinkedList {
    head: LinkedListNode;

    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head == null;
    }

    enQueue(data: any) {
        let newNode = new LinkedListNode(data);
        if(this.isEmpty()) {
            this.head = newNode;
            return;
        }
        let tempHead = this.head;
        while(tempHead.next != null) {
            tempHead = tempHead.next;
        }
        tempHead.next = newNode;
    }

    dequeue() {
        if(this.isEmpty()) {
            return;
        }
        this.head = this.head.next;
    }

    print() {
        let tempHead = this.head;
        let result = "";
        while(tempHead != null) {
            //console.log(tempHead.data);
            result += result.length ? ` <-- ${tempHead.data}` : `${tempHead.data}`;
            tempHead = tempHead.next;
        }
        return result;
    }

    peek():any {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.head.data;
    }
}


const queue1 = new QueueUsingLinkedList();
queue1.enQueue(1);
queue1.enQueue(2);
queue1.enQueue(3);
queue1.enQueue(4);
queue1.enQueue(5);
queue1.enQueue(6);
queue1.enQueue(7);
queue1.enQueue(8);
queue1.enQueue(9);
queue1.enQueue(10);
console.log(`Initial: ${queue1.print()}`);
queue1.dequeue();
console.log(`After dequeue: ${queue1.print()}`);
console.log(`Peek: ${queue1.peek()}`);
console.log(`isEmpty: ${queue1.isEmpty()}`);