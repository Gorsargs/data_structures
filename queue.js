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

  reverse() {
    let tailPrev = null;
    let tail = this.tail;
    
    if(this.head){
      this.tail.next = this.head;
      tailPrev = this.tail;
      this.head = this.head.next;
      this.tail = this.tail.next;
      this.tail.next = null
      while(this.head !== tail){
        let tempHead = this.head;
        this.head = this.head.next;
        tempHead.next = tailPrev.next;
        tailPrev.next = tempHead;
      }
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

queue.add("1")
queue.add("2")
queue.add("3")
queue.add("4")
queue.add("5")





queue.reverse();
queue.reverse();

console.log(queue.head)
console.log(queue.head.next)
console.log(queue.head.next.next)


console.log(queue)
