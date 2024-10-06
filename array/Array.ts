interface Data {
    index: number;
    value: any;
}

class CustomArray {
    private data: Data;
    length: number;
    constructor() {
        this.data = {index: 0, value: null};
        this.length = 0;
    }

    /**
     * @param value The item to add to the end of the array.
     * @returns The length of the array after the push operation.
     */
    push(value: any) {
        this.data[this.length] = {index: this.length, value: value};
        this.length++;
    }

    /**
     * @returns The last item in the array, or undefined if the array is empty.
     */
    pop(): any {
        let lastItem = undefined;
        if(!!this.length) {
            lastItem = this.data[this.length-1].value;
            delete this.data[this.length - 1];
            this.length--;
        }
        return lastItem;
    }

    /** 
     * @returns A comma-separated string containing all the values in the array.
     */
    print(): string {
        let result = "";
        if(this.length) {
            for (let index = 0; index < this.length; index++) {
                result += result.length ? `, ${this.data[index].value}` : `${this.data[index].value}`;
            }
        }
        return result;
    }
}

let customArray: CustomArray = new CustomArray();
customArray.push(1);
customArray.push(2);
customArray.push(3);
customArray.push(4);
console.log(`Length: ${customArray.length}`);
console.log(`print: ${customArray.print()}`);
console.log(`pop: ${customArray.pop()}`);
console.log(`print: ${customArray.print()}`);