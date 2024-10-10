class BTNode {
    value: number;
    left: BTNode;
    right: BTNode;

    /**
     * Construct a new BTNode with the given value.
     * @param value {number} the value to store in the node
     */
    constructor(value: number) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinaryTree {
    root: BTNode;

    /**
     * Construct a new BinaryTree, with root initially set to null.
     * Use insert() to add the first element.
     */
    constructor() {
        this.root = null;
    }

    /**
     * Inserts a new node with the given value into the tree.
     * Throws an exception if no value is provided.
     * @param value {number} the value to store in the new node
     * @returns {void}
     */
    insert(value: number) {
        if(value == undefined) {
            throw new Error("Plz pass value!");        
        }

        const newNode = new BTNode(value);
        if(this.root == null) {
            this.root = newNode;
            return;
        }

        let queue = [this.root];

        while(!!queue.length) {
            let node = queue.shift();
            if(node.left == null) {
                node.left = newNode;
                break;
            } else {
                queue.push(node.left);
            }
            if(node.right == null) {
                node.right = newNode;
                break;
            } else {
                queue.push(node.right);
            }
        }
    }

    
    /**
     * Returns a new BinaryTree with the same structure as the current tree rooted at `node`.
     * @param node {BTNode} the root of the tree to print
     * @returns {BTNode} the root of the cloned tree
     */
    print(node: BTNode): BTNode {        
        let tree = new BTNode(node.value);
        tree.left = node.left === null ? null : this.print(node.left);
        tree.right = node.right === null ? null : this.print(node.right);
        return tree;
    }
    
    /**
     * Iterative in-order traversal of the tree, returns a string with the values of all nodes.
     * @param node {BTNode} the root of the tree to traverse
     * @returns {string} a string with the values of all nodes
     */
    inOrderTraverseInteration(node: BTNode):string {
        if(node == null) {
            return;
        }
        let stack = [];
        let current = this.root;
        let result = "";
        while (!!stack.length || !!current) {
            while(!!current) {
                stack.push(current);
                current = current.left;                
            }
            current = stack.pop();
            console.log(current.value);
            current = current.right;            
        }
        return result;
    }

    /**
     * Iterative pre-order traversal of the tree, returns a string with the values of all nodes.
     * @param node {BTNode} the root of the tree to traverse
     * @returns {string} a string with the values of all nodes
     */
    preOrderTraverseInteration(node: BTNode):string {
        if(node == null) {
            return;
        }
        let stack = [this.root];
        let current = null;
        let result = "";
        while (!!stack.length) {
            current = stack.pop();  
            result += ` ${current.value}`;
            // pushing right first to process left first
            if(!!current.right) {
                stack.push(current.right);
            }
            if(!!current.left) {
                stack.push(current.left);
            }
        }
        return result;
    }

    /**
     * Iterative post-order traversal of the tree, returns a string with the values of all nodes.
     * @param node {BTNode} the root of the tree to traverse
     * @returns {string} a string with the values of all nodes
     */
    postOrderTraverseInteration(node: BTNode):string {
        if(node == null) {
            return;
        }
        let stack = [this.root];
        let current = this.root;
        let result = "";
        while (!!stack.length) {
            current = stack.pop();
            result = `${current.value} ${result}`;
            current.left && stack.push(current.left);
            current.right && stack.push(current.right);
        }
        return result;
    }

    inOrderDFS(node: BTNode) {
        if(!node) {
            return "";
        }
        this.inOrderDFS(node.left);
        console.log(node.value);
        this.inOrderDFS(node.right);  
    }

    /**
     * Prints the values of the nodes in pre-order depth first search order (root -> left -> right)
     * @param node {BTNode} the root of the tree to traverse
     * @returns {void}
     */
    preOrderDFS(node: BTNode) {
        if(!node) {
            return "";
        }
        console.log(node.value);
        this.preOrderDFS(node.left);
        this.preOrderDFS(node.right);
    }

    /**
     * Prints the values of the nodes in post-order depth first search order (left -> right -> root)
     * @param node {BTNode} the root of the tree to traverse
     * @returns {void}
     */
    postOrderDFS(node: BTNode) {
        if(!node) {
            return "";
        }
        this.postOrderDFS(node.left);
        this.postOrderDFS(node.right);        
        console.log(node.value);
    } 
}

let binaryTree: BinaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(7);
binaryTree.insert(8);
// console.log(JSON.stringify(binaryTree.print(binaryTree.root)));
console.log(binaryTree.inOrderTraverseInteration(binaryTree.root));
// console.log(binaryTree.preOrderTraverseInteration(binaryTree.root));
//console.log(binaryTree.postOrderTraverseInteration(binaryTree.root));
//binaryTree.postOrderDFS(binaryTree.root);
// binaryTree.preOrderDFS(binaryTree.root);
binaryTree.inOrderDFS(binaryTree.root);