// Array is used to implement stack
class StackUsingArray {
    items: any[]
    /**
     * This is the constructor for StackUsingArray class
     * It initializes an empty array to store elements
     */
    constructor() {
        this.items = [];        
    }
    /**
     * This function adds an item to the end of the stack.
     * @param item This is the item to be added to the stack.
     */
    push(item) {
        this.items.push(item);
    }
    /**
     * This function removes an item from the top of the stack.
     * @return The top of the stack object is removed and returned here.
     * If stack is empty then the underflow error will be thrown.
     */
    pop() {
        if (this.items.length == 0) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    /**
     * This function returns the item at the top of the stack
     * without removing it from the stack.
     * @return The top of the stack object is returned here.
     * If stack is empty then the underflow error will be thrown.
     */
    peek() {
        if (this.items.length == 0) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    /**
     * This function returns true if the stack is empty and false if the stack is not empty
     * @return boolean
     */
    isEmpty() {
        return this.items.length == 0;
    }
    /**
     * This function prints the elements of the stack. The bottom of the stack will be printed first.
     * @return The elements of the stack are printed here.
     * If stack is empty then the underflow error will be thrown.
     */
    print() {
        if (this.items.length == 0) {
            return "Stack is empty";
        }
        return this.items.join("\n");
    }
}
const stackUsingArray = new StackUsingArray();
stackUsingArray.push(1);
stackUsingArray.push(2);
stackUsingArray.push(3);
console.log(`Initial: ${stackUsingArray.print()}`);
console.log(`Peek: ${stackUsingArray.peek()}`);
console.log(`Pop: ${stackUsingArray.pop()}`);
console.log(`After Pop: ${stackUsingArray.print()}`);