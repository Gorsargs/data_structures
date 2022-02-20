class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  delete() {
    if (this.head) {
      this.head = this.head.next;
    }
    return;
  }

  search(value) {
    let tempNode = this.head;
    while (tempNode != null) {
      if (tempNode.value === value) {
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export default LinkedList;


