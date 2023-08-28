class Queue {

  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if(this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    if(this.isEmpty()) return null;
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue());
console.log(q.front());
console.log(q)