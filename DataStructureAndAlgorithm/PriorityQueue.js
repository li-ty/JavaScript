class PriorityQueue {

    constructor() {
        this.items = [];
    }

    enqueue(item) {
        if (this.items.length == 0) {
            this.items.push(item);
        } else {
            for (var i = 0; i < this.items.length; i++) {
                if (item.priority <= this.items[i].priority) break;
            }
            this.items.splice(i, 0, item);
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

}

let q = new PriorityQueue();
q.enqueue({ priority: 9, v: 9 });
q.enqueue({ priority: 44, v: 44 });
q.enqueue({ priority: 2, v: 2 });
q.enqueue({ priority: 1, v: 1 });
q.enqueue({ priority: 13, v: 13 });
q.enqueue({ priority: 4, v: 4 });
q.enqueue({ priority: 3, v: 3 });
q.enqueue({ priority: 0, v: 0 });
console.log(q)
console.log(q.dequeue());
console.log(q.front());
console.log(q)