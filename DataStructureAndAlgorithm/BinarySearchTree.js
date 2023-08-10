class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //循环实现
    insert(key) {
        let node = new Node(key);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (currentNode.key < key) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                } else if (currentNode.key > key) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
    }

    //递归写法
    insert2(key) {
        let node = new Node(key);
        if (!this.root) {
            this.root = node;
        } else {
            this._insertNode(this.root, node)
        }
    }

    _insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    //获取某个值，循环实现
    get(key) {
        if (!this.root) {
            return null;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (currentNode.key < key) {
                    currentNode = currentNode.right;
                } else if (currentNode.key > key) {
                    currentNode = currentNode.left;
                } else {
                    return currentNode.key;
                }
            }
            return null;
        }
    }
    //递归实现
    get2(key) {
        return this._getNode(this.root, key);
    }

    _getNode(node, key) {
        if (!node) return null;
        if (node.key > key) return this._getNode(node.left, key);
        else if (node.key < key) return this._getNode(node.right, key);
        else return node.key;
    }

    /**
     * 删除操作流程
     * 1、查找要删除的节点，找不到不需要删除；
     * 2、找到了要删除的节点，分三种情况：
     *   (1)删除叶子节点；
     *   (2)删除只有一个子节点的节点；
     *   (3)删除有两个子节点的节点；
     *      1)右子树最小值节点替换掉删除的节点
     *      2)左子树最大值节点替换掉删除的节点
     */
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }

    removeNode(node, key) {
        if (!node) return null;

        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
        } else {
            //(1)删除叶子节点；
            if (!node.left && !node.right) return null;
            //(2)删除只有一个子节点的节点；
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }
            // (3)删除有两个子节点的节点；
            //    1)右子树最小值节点替换掉删除的节点
            //    2)左子树最大值节点替换掉删除的节点
            let temp = this.findMinNode(node.right);
            node.key = temp.key;
            node.right = this.removeNode(node.right, temp.key);
        }
        return node;
    }

    findMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    //先序遍历
    preOrderTraversal() {
        this._preOrderTraversalNode(this.root);
    }

    _preOrderTraversalNode(node) {
        if (node) {
            console.log(node.key, "  ")
            this._preOrderTraversalNode(node.left);
            this._preOrderTraversalNode(node.right);
        }
    }

    //中序遍历
    midOrderTraversal() {
        this._midOrderTraversalNode(this.root);
    }

    _midOrderTraversalNode(node) {
        if (node) {
            this._midOrderTraversalNode(node.left);
            console.log(node.key, "  ")
            this._midOrderTraversalNode(node.right);
        }
    }

    //后序遍历
    postOrderTraversal() {
        this._postOrderTraversalNode(this.root);
    }

    _postOrderTraversalNode(node) {
        if (node) {
            this._postOrderTraversalNode(node.left);
            this._postOrderTraversalNode(node.right);
            console.log(node.key, "  ")
        }
    }
    //最小值
    min() {
        let currentNode = this.root;
        if (!currentNode) return null;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.key;
    }
    //最大值
    max() {
        let currentNode = this.root;
        if (!currentNode) return null;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.key;
    }


}


let bst = new BinarySearchTree();
bst.insert2(11)
bst.insert2(7)
bst.insert2(15)
bst.insert2(5)
bst.insert2(3)
bst.insert2(9)
bst.insert2(8)
bst.insert2(10)
bst.insert2(13)
bst.insert2(12)
bst.insert2(14)
bst.insert2(20)
bst.insert2(18)
bst.insert2(25)
bst.insert2(6)




bst.postOrderTraversal()
bst.remove(15)
console.log(8888888888)


bst.postOrderTraversal()


console.log(bst)