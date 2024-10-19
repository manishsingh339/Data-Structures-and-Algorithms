//Boundary Traversal of binary tree
//Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise starting from the root.

class BTBoundaryAntiClockwise {   
    data: number;
    left: BTBoundaryAntiClockwise;
    right: BTBoundaryAntiClockwise;
     
    /**
     * Construct a new BTBoundaryAntiClockwise node with the given value.
     * @param {number} value - the value to store in the node
     */
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

    /**
     * Prints the left boundary nodes of the binary tree in a top-down order.
     * @param {BTBoundaryAntiClockwise} node - the root of the tree
     */
    printLeftBoundary(node) {
        if(node == null) {
           return; 
        }
        // for printing top down approach, print before call.
        if(node.left) {
            console.log(node.data);
            this.printLeftBoundary(node.left);
        } else if(node.right) {
            console.log(node.data);
            this.printLeftBoundary(node.right);
        }
    }
    
    /**
     * Prints the right boundary nodes of the binary tree in a bottom-up order.
     * @param {BTBoundaryAntiClockwise} node - the root of the tree
     */
    printRightBoundary(node) {
        if(node == null) {
            return;
        }
        if(node.right) {
            this.printRightBoundary(node.right);
            console.log(node.data);
        } else if(node.left) {
            this.printRightBoundary(node.left);
            console.log(node.data);
        }
    }

    /**
     * Prints the leaf nodes of the binary tree in a left-right order.
     * @param {BTBoundaryAntiClockwise} node - the root of the tree
     */
    printLeafBoundary(node) {
        if(node == null) {
            return;
        }
        if(!node.left && !node.right) {
            console.log(node.data);
        }
        this.printLeafBoundary(node.left);
        this.printLeafBoundary(node.right);
    }

    /**
     * Prints the boundary nodes of the tree in an anti-clockwise direction.
     * 
     * First, the root is printed. Then, the left boundary nodes are printed
     * top-down. Then the leaf nodes are printed left-right. Finally, the right
     * boundary nodes are printed bottom-up.
     * 
     * @param {BTBoundaryAntiClockwise} node - the root of the tree
     */
    printBoundary(node) {
        if(node == null) {
            return;
        }
        console.log(node.data)
        // print left node top-down
        this.printLeftBoundary(node.left);
        
        // print leaf nodes left-right
        this.printLeafBoundary(node.left);
        this.printLeafBoundary(node.right);
        
        // print right node bottom-up
        this.printRightBoundary(node.right);
    }
}

let root = new BTBoundaryAntiClockwise(20);
root.left = new BTBoundaryAntiClockwise(8);
root.left.left = new BTBoundaryAntiClockwise(4);
root.left.right = new BTBoundaryAntiClockwise(12);
root.left.right.left = new BTBoundaryAntiClockwise(10);
root.left.right.right = new BTBoundaryAntiClockwise(14);
root.right = new BTBoundaryAntiClockwise(22);
root.right.right = new BTBoundaryAntiClockwise(25);

// let root = new BTBoundaryAntiClockwise(1);
// root.left = new BTBoundaryAntiClockwise(2);
// root.right = new BTBoundaryAntiClockwise(3);
// root.left.left = new BTBoundaryAntiClockwise(4);
// root.left.right = new BTBoundaryAntiClockwise(5);
// root.left.right.left = new BTBoundaryAntiClockwise(8);
// root.left.right.right = new BTBoundaryAntiClockwise(9);
// root.left.left.left = new BTBoundaryAntiClockwise(7);
// root.left.left.left.right = new BTBoundaryAntiClockwise(11);
// root.left.left.left.right.right = new BTBoundaryAntiClockwise(13);
// root.right.right = new BTBoundaryAntiClockwise(6);
// root.right.right.right = new BTBoundaryAntiClockwise(10);
// root.right.right.right.left = new BTBoundaryAntiClockwise(12);


root.printBoundary(root);