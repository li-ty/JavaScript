class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
    }

    append(data){
        let node = new Node(data);
        if(this.length == 0) this.head = node;
        else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node
        }
        this.length++;
    }

    insert(index, data){
        let node = new Node(data);
        if(index == 0){
            let head = this.head;
            node.next = head;
            this.head = node;
            this.length ++;
        }else if(index > 0 && index <= this.length - 1){
            let count = 0;
            let currentNode = this.head;
            while(count++ != index){
                currentNode = currentNode.next;
            }
            let next = currentNode.next;
            node.next = next;
            currentNode.next = node;
            this.length ++;
        }
        else{
            this.append(data);
        }
    }

    get(index){
        let currentNode = this.head;
        let count = 1;
        while(index != count){
            currentNode = currentNode.next;
            count ++;
        }
        return currentNode.data;
    }

    removeAt(index){
        if(index == 0){
            this.head = this.head.next;
        }else if(index > 0 && index < this.length){
            let count = 1;
            let preNode = this.head;
            while(count != index){
                preNode = preNode.next;
                count++
            }
            let nextNode = preNode.next.next;
            preNode.next = nextNode;
        }else{
            let count = 1;
            let preNode = this.head;
            while(true){
                preNode = preNode.next;
                if(count == index) break;
                count++
            }
            preNode.next = null;
        }
        this.length --;
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
l.insert(0,53);
// l.insert(2,53);
// l.insert(2,53);
// l.insert(18,90);
// console.log(l.get(9));
// l.removeAt(0);
// l.removeAt(0);
// l.removeAt(0);
// l.removeAt(0);
console.log(l.toString());
// l.removeAt(0);
// console.log(l.toString());