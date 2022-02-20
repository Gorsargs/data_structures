import LinkedList from "./linked_list.mjs";

class HashTable {
  constructor() {
    this.table = new Array(1000);
  }

  h = (key) => {
    //not a very good hash function;
    let index;
    if (typeof key === "string") {
      let generatedNum = 0;
      for (let i = 0; i < key.length; i++) {
        generatedNum += key.charCodeAt(i);
      }
      index = Math.floor(generatedNum % this.table.length);
    }
    return index;
  };

  set = (key, value) => {
    //collision handled by using chaining method with Linked list;
    const index = this.h(key);
    if (this.table[index]?.head) {
      if (!this.table[index].search(value)) {
        this.table[index].add(value);
        this.table[index].head.key = key;
      }
    } else {
      this.table[index] = new LinkedList();
      this.table[index].add(value);
      this.table[index].head.key = key;
    }
  };

  get = (key) => {
    const list = this.table[this.h(key)];
    if(list){
      let node = list.head;
      while(node.key !== key && node.next){
        node = node.next;
      }
      if(node.key !== key) return undefined;
      return node.value;
    }
    return undefined;
  };
}

const hashTable = new HashTable();