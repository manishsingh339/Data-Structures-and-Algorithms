class LLNode {
    data: any;
    next: LLNode;

    /**
     * Construct a new node in the linked list with the given data.
     * @param data data to be stored in the node.
     */
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    private head: LLNode;

    /**
     * Construct a new singly linked list. The linked list is initially empty.
     * @param data ignored, but present for consistency with DoublyLinkedList.
     */
    constructor() {
        this.head = null;
    }

    /**
     * Prints the linked list by traversing the linked list and 
     * concatenating all the node data into a string. 
     * @return a string containing all the elements of the linked list 
     * in the order they appear, separated by " --> ".
     */
    print(): string {
        let result = "";
        let tempHead = this.head;
        while(tempHead != null) {
            result += result.length ? ` --> ${tempHead.data}` : `${tempHead.data}`;
            tempHead = tempHead.next;
        }
        return result;
    }

    /**
     * Add a new node to the end of the linked list. 
     * This operation traverses the linked list to the last node and 
     * appends a new node to the end of the linked list with the given data.
     * @param data data to be stored in the new node.
     */
    appendAtLast(data: any) {        
        if(this.head == null) {
            this.head = new LLNode(data);
            return;
        }
        let tempHead = this.head;        
        while(tempHead.next != null) {            
            tempHead = tempHead.next;
        }
        tempHead.next = new LLNode(data);
    }

    /**
     * Adds a new node with the given data to the linked list at the given position. 
     * This operation traverses the linked list to the given position and 
     * inserts a new node there with the given data.
     * @param data data to be stored in the new node.
     * @param position position at which the data should be inserted. 
     * The first element is at position 1. If the position is greater than the 
     * number of elements in the linked list, an error is thrown.
     * @throws Error if the linked list is empty and the position is not 1, 
     * or if the position is greater than the number of elements in the linked list.
     */
    add(data: any, position: number) {
        if(this.head == null && position !== 1) {
            throw new Error("LinkedList is Empty");
        }
        let tempHead = this.head;
        let newNode = new LLNode(data);
        if(position == 1) {
            newNode.next = tempHead;
            this.head = newNode;
            return;
        }
        let count = 1;
        while(tempHead.next != null) {            
            if(count == position-1) {                
                newNode.next = tempHead.next;
                tempHead.next = newNode;                
                return;
            }
            count++;
            tempHead = tempHead.next;            
        }        
        throw new Error("Index out of bounds");
    }

    /**
     * Remove the last node in the linked list.
     * This operation traverses the linked list to the second last node and 
     * removes the last node from the linked list.
     * @throws Error if the linked list is empty.
     */
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
    }


    /**
     * Removes the node at a given position in the linked list.
     * This operation traverses the linked list to the node at the given position
     * and removes it from the linked list.
     * @param position The position of the node to be removed. 
     * @throws Error if the linked list is empty, or if the position is invalid or out of bounds.
     */
    removeFromIndex(position: number) {
        let tempHead = this.head;
        if(tempHead == null) {
            throw new Error("Linked List is empty!");
        }
        if(position < 1) {
            throw new Error("invalid position")
        }
        let count = 1;
        while(tempHead.next != null) {
            if(count == position-1) {
                tempHead.next = tempHead.next.next;
                return;
            }
            count++;
            tempHead = tempHead.next;
        }
        throw new Error("Index out of bounds");
    }
}

let linkedList = new SinglyLinkedList();
linkedList.appendAtLast(13);
linkedList.appendAtLast(11);
linkedList.appendAtLast(9);
console.log(`Initial: ${linkedList.print()}`);
linkedList.add(10, 3);
console.log(`After adding 10 at 3 ${linkedList.print()}`);
linkedList.add(1, 4);
console.log(`After adding 1 at 4 ${linkedList.print()}`);
linkedList.removeFromLast();
console.log(`After removing last ele ${linkedList.print()}`);
linkedList.removeFromIndex(3);
console.log(`After removing from 3 ${linkedList.print()}`);