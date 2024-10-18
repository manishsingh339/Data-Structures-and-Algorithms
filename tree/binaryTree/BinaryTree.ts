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

interface RightMostNodeData {
    rightNode: BTNode, 
    parent: BTNode
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

    inOrderDFS(node: BTNode, result: number[]) {
        if(!node) {
            return result;
        }
        this.inOrderDFS(node.left, result);
        result.push(node.value);
        this.inOrderDFS(node.right, result);  
        return result;
    }

    heightOfTree(node: BTNode): number {
        if(!node) {
            return 0;
        }
        return Math.max(this.heightOfTree(node.left), this.heightOfTree(node.right)) + 1;
    }

    heightOfTreeIterative(node: BTNode): number {
        if(!node) {
            return 0;
        }
        let queue = [node];        
        let height = 0;
        while(queue.length) {            
            let size = queue.length;
            // Traverse all nodes at the current level
            for (let i = 0; i < size; i++) {
                let temp = queue.shift();
                if (temp.left) queue.push(temp.left);
                if (temp.right) queue.push(temp.right);
            }
            // Increment height after traversing each level
            height++;
        }
        return height;
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

    /**
     * Prints the values of the nodes in breadth first search order (level order)
     * @param node {BTNode} the root of the tree to traverse
     * @returns {number[]} the values of the nodes in the order they were visited
     */
    BFSTraversal(node: BTNode):number[] {
        let result: number[] = [];
        if(!node) {
            return result;
        }
        let queue = [node];
        let current = node;
        while(queue.length) {
            current = queue.shift();
            result.push(current.value);
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }
        return result;
    }

    /**
     * Gets the parent of the rightmost node in the subtree with the given root node
     * @param node {BTNode} the root of the subtree
     * @returns {BTNode} the parent of the rightmost node in the subtree
     */
    getRightMostNodeParent(node: BTNode): RightMostNodeData {
        if(node == null) {
           return null;
        }
        let result:RightMostNodeData = {rightNode: null, parent: null};        
        let queue = [node];
        
        while(queue.length) {
            result.rightNode = queue.shift();            
            result.rightNode.left && queue.push(result.rightNode.left);
            result.rightNode.right && queue.push(result.rightNode.right);           
            if(result.rightNode.right || result.rightNode.left) {                
                result.parent = result.rightNode;           
            }
        }
        return result;
    }

    /**
     * Deletes the node with the given value from the tree. If the node to be deleted is a leaf node, it is removed. If the node to be deleted is not a leaf node, the value of the rightmost node in the subtree is swapped with the value of the node to be deleted, and the rightmost node is then removed. If the node to be deleted is not found, the tree is unchanged.
     * @param value {number} the value of the node to be deleted
     * @returns {BTNode} the root of the tree after deletion
     */
    deleteNode(value: number): BTNode {
        if(this.root == null) {
            return null;
        }
        let rightMostNodeData: RightMostNodeData = this.getRightMostNodeParent(this.root);
        let targetNode = null;
        let queue = [this.root];
        let current = this.root;
        
        while(queue.length) {
            current = queue.shift();
            if(current.value == value) {
                targetNode = current;
                break;
            }
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }

        if(!targetNode) {
            return this.root;
        }
        
        targetNode.value = rightMostNodeData.rightNode.value;
        rightMostNodeData.parent.right = null;
        return this.root;
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
// binaryTree.insert(9);
console.log(JSON.stringify(binaryTree.print(binaryTree.root)));
// console.log(binaryTree.inOrderTraverseInteration(binaryTree.root));
// console.log(binaryTree.preOrderTraverseInteration(binaryTree.root));
//console.log(binaryTree.postOrderTraverseInteration(binaryTree.root));
//binaryTree.postOrderDFS(binaryTree.root);
// binaryTree.preOrderDFS(binaryTree.root);
// console.log(binaryTree.inOrderDFS(binaryTree.root, []));
//console.log(binaryTree.BFSTraversal(binaryTree.root));
// console.log(binaryTree.deleteNode(5));
// console.log(JSON.stringify(binaryTree.print(binaryTree.root)));
// console.log(binaryTree.heightOfTreeIterative(binaryTree.root));
console.log(JSON.stringify(binaryTree.getRightMostNodeParent(binaryTree.root).parent.value));