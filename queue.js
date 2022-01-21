class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    if (this.head === null) {
      this.head = new Node(value, this.tail);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value, null);
      this.tail = this.tail.next;
    }
  }

  delete() {
    if (this.head !== this.tail) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const queue = new Queue();
