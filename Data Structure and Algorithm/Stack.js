class Stack {
    constructor() {
      this.items = [];
    }

    push(item) {
      this.items.push(item);
    }

    pop() {
      if(this.isEmpty()) return null;
      return this.items.pop();
    }

    peek() {
      if(this.isEmpty()) return null;
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length == 0;
    }
    
    size() {
      return this.items.length;
    }
  }

  let s = new Stack();
  s.push(1);
  console.log(s);
  console.log(s.pop());
  s.push(2);
  console.log(s.isEmpty());
  console.log(s.peek());
  console.log(s.size());