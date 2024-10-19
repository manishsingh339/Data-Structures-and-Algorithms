//Diagonal Traversal of Binary Tree

class DiagonalTraversal {
    data: number;
    left: DiagonalTraversal;
    right: DiagonalTraversal;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    staticprintDiagonal(root: DiagonalTraversal): string {
        let result = "";
        if (root == null) return result;
        let queue = [root];
        let queueIndex = 0;
        while (queue.length > queueIndex) {
            let current = queue[queueIndex];
            queueIndex++;            
            while(current) {
                result += current.data+" ";
                if(current.left) queue.push(current.left);
                current = current.right;
            }
        }
        return result;
    }
}

const _root = new DiagonalTraversal(8);
_root.left = new DiagonalTraversal(3);
_root.right = new DiagonalTraversal(10);
_root.left.left = new DiagonalTraversal(1);
_root.left.right = new DiagonalTraversal(6);
_root.left.right.left = new DiagonalTraversal(4);
_root.left.right.right = new DiagonalTraversal(7);
_root.right.right = new DiagonalTraversal(14);
_root.right.right.left = new DiagonalTraversal(13);

// let _root = new DiagonalTraversal(1);
// _root.left = new DiagonalTraversal(2);
// _root.right = new DiagonalTraversal(3);
// _root.left.left = new DiagonalTraversal(4);
// _root.left.right = new DiagonalTraversal(5);
// _root.left.right.left = new DiagonalTraversal(8);
// _root.left.right.right = new DiagonalTraversal(9);
// _root.left.left.left = new DiagonalTraversal(7);
// _root.left.left.left.right = new DiagonalTraversal(11);
// _root.left.left.left.right.right = new DiagonalTraversal(13);
// _root.right.right = new DiagonalTraversal(6);
// _root.right.right.right = new DiagonalTraversal(10);
// _root.right.right.right.left = new DiagonalTraversal(12);
// console.log(_root.staticprintDiagonal(_root));