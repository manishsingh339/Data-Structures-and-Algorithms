class DLLNode {
    data: any;
    next: DLLNode;
    prev: DLLNode;

    constructor(data: any) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: DLLNode;

    constructor() {
        this.head = null;
    }

    print(): string {
        let result = "";
        let tempHead = this.head;
        while(tempHead != null) {
            result += result.length ? ` <==> ${tempHead.data}` : `${tempHead.data}`;
            tempHead = tempHead.next;
        }
        return result;
    }

    append(data: any) {
        let tempHead = this.head;
        let newNode = new DLLNode(data);
        if(this.head == null) {
            this.head = newNode;
            return;
        }
        while(tempHead.next != null) {
            tempHead = tempHead.next;
        }
        tempHead.next = newNode;
        newNode.prev = tempHead;
    }

    add(data: any, position: number) {
        let tempHead = this.head;
        let newNode = new DLLNode(data);

        if(this.head == null && position !== 1) {
            throw new Error("LinkedList is Empty");
        }

        if(position < 1) {
            throw new Error("Invalid position");     
        }

        if(position === 1) {
            this.head = newNode;
            newNode.next = tempHead;
            tempHead.prev = newNode;    
            return;        
        }

        let count = 1;
        while(tempHead != null) {
            if(count == position) {
                newNode.next = tempHead;
                newNode.prev = tempHead.prev;
                newNode.prev.next = newNode;
                tempHead.prev = newNode;
                return;
            }
            tempHead = tempHead.next;
            count++;
        }
        console.log(count);        
        throw new Error("Index out of bounds")
    }

    removeFromLast() {
        let tempHead = this.head;
        if(tempHead == null) {
            throw new Error("Linked List is empty");
        }
        if(tempHead.next == null) {
            this.head = null;
            return;
        }
        while(tempHead.next.next != null) {
            tempHead = tempHead.next;
        }
        tempHead.next = null;
        tempHead.prev.next = tempHead;
    }

    removeFromPosition(position: number) {
        if(position < 1) {
            throw new Error("Invalid position");            
        }
        let count = 1;
        let tempHead = this.head;

        if(position == 1) {
            this.head = tempHead.next;
            this.head.prev = null;
            return;
        }

        while(tempHead != null) {
            if(count == position) {
                tempHead.prev.next = tempHead.next;
                tempHead.next.prev = tempHead.prev;
                return;
            }
            tempHead = tempHead.next;
            count++;
        }
        throw new Error("Index out of bounds");
    }
}

const dLinkedList: DoublyLinkedList = new DoublyLinkedList();
dLinkedList.append(13);
dLinkedList.append(11);
dLinkedList.append(9);
dLinkedList.append(2);
console.log(`Initial: ${dLinkedList.print()}`);
dLinkedList.add(1, 4);
console.log(`After add(1, 4) : ${dLinkedList.print()}`);
dLinkedList.removeFromLast();
console.log(`After removeFromLast : ${dLinkedList.print()}`);
dLinkedList.removeFromPosition(4);
console.log(`After removeFromPosition : ${dLinkedList.print()}`);