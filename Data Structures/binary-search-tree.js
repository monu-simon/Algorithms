class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return false
        } else {
            return this.checkValue(this.root, value);
        }
    }

    checkValue(root, value) {
        if (root.value === value)
            return true
        else if (root.left !== null && value < root.value) return this.checkValue(root.left, value);
        else if (root.right !== null && value > root.value) return this.checkValue(root.right, value);
        else return false
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(121);
bst.insert(20);
console.log(bst.search(121));