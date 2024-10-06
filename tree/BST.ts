class TreeNode {
    value: number;
    left: TreeNode;
    right: TreeNode;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root: TreeNode;

    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }

    insert(value: number) {
        let tempRoot = this.root;
        let newNode = new TreeNode(value);
        if(this.isEmpty()) {
            this.root = newNode;
            return;
        }

        while(tempRoot != null) {
            if(value < tempRoot.value) {
                if(tempRoot.left == null) {
                    tempRoot.left = newNode;
                    return;
                }
                tempRoot = tempRoot.left;
            } else {
                if(tempRoot.right == null) {
                    tempRoot.right = newNode;
                    return;
                }
                tempRoot = tempRoot.right;
            }
        }
    }

    lookup(value: number) {
        let tempRoot = this.root;
        while(tempRoot != null) {
            if(value < tempRoot.value) {
                tempRoot = tempRoot.left;
            } else if(value > tempRoot.value) {
                tempRoot = tempRoot.right;
            } else {
                return tempRoot;
            }
        }
        return null;
    }

    traverse(node: TreeNode) {                
        let tree = new TreeNode(node.value);
        tree.left = node.left === null ? null : this.traverse(node.left);
        tree.right = node.right === null ? null : this.traverse(node.right);
        return tree;
    }

    remove(value: number) {
    }
}


const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//tree.remove(170);
console.log(JSON.stringify(tree.traverse(tree.root)));
console.log(tree.lookup(20));