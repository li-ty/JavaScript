class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length == 0) this.head = node;
        else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node
        }
        this.length++;
    }

    insert(index, data) {
        if (index < 0 || index > this.length) throw new Error("下标越界！");
        let node = new Node(data);
        if (index == 0) {
            node.next = this.head;
            this.head = node;
            this.length++;
        } else if (index > 0) {
            let count = 0;
            let currentNode = this.head;
            while (++count < index) {
                currentNode = currentNode.next;
            }
            node.next = currentNode.next;
            currentNode.next = node;
            this.length++;
        }

    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let currentNode = this.head;
        let count = 0;
        while (count++ < index) {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    indexOf(data) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.data == data) return index;
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }

    update(index, data) {
        if (index < 0 || index >= this.length) throw new Error("下标越界！");
        let currentNode = this.head;
        let count = 0;
        while (currentNode) {
            if (count++ == index) {
                currentNode.data = data;
                break;
            }
            currentNode = currentNode.next;
        }

    }

    removeAt(index) {
        if (index < 0 || index >= this.length) throw new Error("下标越界！");
        let currentNode = this.head;
        if (index == 0) {
            this.head = currentNode.next;
        } else if (index > 0) {
            let count = 0;
            let previousNode = null;
            while (count++ < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.data;
    }

    remove(data) {
        return this.removeAt(this.indexOf(data));
    }
    
    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    toString() {
        let currentNode = this.head;
        let result = '';
        while (currentNode) {
            result += currentNode.data + ' ';
            currentNode = currentNode.next;
        }

        return result + "   " + this.length;
    }
}

let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);
//l.update(0,4);
// l.insert(2,53);
// l.insert(2,53);
// l.insert(18,90);
// console.log(l.get(9));
// l.removeAt(0);
// l.removeAt(0);
// l.removeAt(0);
// l.removeAt(0);
//console.log(l.indexOf(0));
// console.log(l.toString());
// l.removeAt(-1);
console.log(l.toString());
console.log(l.remove(6));
console.log(l.toString());