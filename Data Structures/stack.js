class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peak() {
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.size;
    }

    isEmpty() {
        return this.items.length === 0
    }

    display() {
        console.log(this.items.toString())
    }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.display();
console.log(stack.isEmpty())