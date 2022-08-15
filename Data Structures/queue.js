class Queue {

    constructor() {
        this.items = [];
    }

    enQueue(element) {
        this.items.push(element);
    }

    deQueue() {
        this.items.shift();
    }

    display() {
        console.log(this.items.toString())
    }
}

const queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4)
queue.deQueue();
queue.display()