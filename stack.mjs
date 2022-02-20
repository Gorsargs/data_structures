class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    if (this.head === null) {
      this.head = new Node(value, this.tail);
      this.tail = this.head;
    } else {
      this.head = new Node(value, this.head);
    }
  }

  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.head !== null) {
      this.head = this.head.next;
    }
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const stack = new Stack();
