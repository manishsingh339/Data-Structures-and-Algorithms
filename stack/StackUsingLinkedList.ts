class LinkedList {
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

class StackUsingLinkedList {
    head: LinkedList;

    /**
     * Construct a new stack, with no elements.
     */
    constructor() {
        this.head = null;
    }

    /**
     * Is the stack empty?
     * @returns {boolean} true if the stack has no elements.
     */
    isEmpty(): boolean {
        return this.head == null;
    }

    /**
     * Pushes a new item onto the stack.
     * @param item - The item to be pushed.
     */
    push(item:any) {
        let newItem = new LinkedList(item);        
        if(this.isEmpty()) {
            this.head = newItem;
            return;
        }
        let tempHead = this.head;
        newItem.next = tempHead;
        this.head = newItem;
    }

    /**
     * Pops the top element off the stack and returns it.
     * @returns {*} The item at the top of the stack, or undefined if the stack is empty.
     */
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        let tempHead = this.head;        
        this.head = tempHead.next;
        return tempHead.data;
    }

    /**
     * Returns a string representation of the stack. Each element of the stack
     * is printed on a new line.
     * @returns {string} A string representation of the stack.
     */
    print(): string {
        if(this.isEmpty()) {
            return undefined;
        }
        let tempHead = this.head;
        let result = "";
        while(tempHead != null) {
            result += result.length ? `\n${tempHead.data}` : `${tempHead.data}`;
            tempHead = tempHead.next;
        }
        return result;
    }

    /**
     * Returns the top element on the stack, without removing it.
     * @returns {*} The top element on the stack, or undefined if the stack is empty.
     */
    peek(): any {
        if(this.isEmpty()) {
            return undefined;            
        }
        return this.head.data;
    }
}

let stact1: StackUsingLinkedList = new StackUsingLinkedList();
stact1.push(1);
stact1.push(2);
stact1.push(3);
console.log(`Initial: ${stact1.print()}`);
console.log(`Peek: ${stact1.peek()}`)
console.log(`Pop: ${stact1.pop()}`)
console.log(`After Pop: ${stact1.print()}`);