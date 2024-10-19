//Reverse Level Order Traversal
// class BtNode {
//     key: number;
//     left: BtNode;
//     right: BtNode;

//     constructor(key: number) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

class BTreverseLevelOrder{
    key: number;
    left: BTreverseLevelOrder;
    right: BTreverseLevelOrder;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    reverseLevelOrder (node: BTreverseLevelOrder) {
        let result = "";
        if(!node) {
            return result;
        }
        let queue = [node];
        let queueIndex = 0; // using index to make O(1)

        while (queue.length > queueIndex) {
            let queueLength = queue.length;
            let levelOrderNodes = ""; 
            for (let index = queueIndex; index < queueLength; index++) {
                let cureentNode = queue[queueIndex];
                levelOrderNodes += cureentNode.key;
                cureentNode.left && queue.push(cureentNode.left);
                cureentNode.right && queue.push(cureentNode.right);
                queueIndex++;
            }
            result = " " + levelOrderNodes + result;
        }
        return result;
    }

    traverse(node){
        if(node == null) {
            return null;
        }
        let result = {left: null, right: null, key: node.key}; 
        result.left = this.traverse(node.left);
        result.right = this.traverse(node.right);
        return result;
    }
}

const _tree = new BTreverseLevelOrder(1);
_tree.left = new BTreverseLevelOrder(2);
_tree.right = new BTreverseLevelOrder(3);
_tree.left.left = new BTreverseLevelOrder(4);
_tree.left.right = new BTreverseLevelOrder(5);
_tree.right.left = new BTreverseLevelOrder(6);
console.log(JSON.stringify(_tree.traverse(_tree)));
console.log(_tree.reverseLevelOrder(_tree));