class QueueUsingArray {
    private items: any[];
    constructor() {
        this.items = [];
    }
    /**
     * Is the queue empty?
     * @returns {boolean} true if the queue has no elements.
     */
    isEmpty(): boolean {
        return this.items.length == 0;
    }
    /**
     * Adds an item to the back of the queue.
     * @param item - The item to be added.
     */
    enqueue(item: any) {
        this.items.push(item);
    }

    /**
     * Removes an item from the front of the queue and returns it.
     * @returns {*} The item at the front of the queue, or undefined if the queue is empty.
     */
    dequeue() {
        if(this.items.length == 0) {
            return "Queue is empty";
        }
        return this.items.shift();
    }
    /**
     * Returns the item at the front of the queue without removing it.
     * @returns {*} The item at the front of the queue, or undefined if the queue is empty.
     */
    peek() {
        if(this.items.length == 0) {
            return "Queue is empty";
        }
        return this.items[0];
    }
    /**
     * Returns a string representation of the queue. Each element of the queue
     * is printed on a new line.
     * @returns {string} A string representation of the queue.
     */
    print(): string {
        if(this.items.length == 0) {
            return "Queue is empty";
        }
        return this.items.join("\n")
    }
}

const queue = new QueueUsingArray();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
console.log(`Initial: ${queue.print()}`);
queue.dequeue();
console.log(`After dequeue: ${queue.print()}`);
console.log(`Peek: ${queue.peek()}`);
console.log(`isEmpty: ${queue.isEmpty()}`);