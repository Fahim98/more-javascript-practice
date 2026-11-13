class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = 0;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  // Add an element to the rear
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full");
      return false;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLength++;
    return true;
  }

  // Remove and return the front element
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    return item;
  }

  // View the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  size() {
    return this.currentLength;
  }
}

// Example usage
const ringBuffer = new CircularQueue(3);
ringBuffer.enqueue(10);
ringBuffer.enqueue(20);
ringBuffer.enqueue(30);

console.log(ringBuffer.isFull());  // true
console.log(ringBuffer.dequeue()); // 10 (frees up index 0)

// Wraps around and reuses index 0
ringBuffer.enqueue(40);
console.log(ringBuffer.peek());    // 20
console.log(ringBuffer.items);     // [40, 20, 30]
