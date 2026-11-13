//stack practice
class Stack{
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    this.items.length;
  }
}

const myStack = new Stack();
myStack.push("A");
myStack.push("B");
console.log(`Current elements: `, myStack.peek());
console.log('Popped element: ', myStack.pop());
console.log('Stack size: ', myStack.size());