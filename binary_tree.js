class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(node) {
    if(!this.root){
      return this.root = node
    }
    this.#addRecursive(this.root,node)
  }

  #addRecursive(parent,node){
    //perfect recursive function
    //change my mind
    if(node.value <= parent.value){
      if(!parent.left){
        parent.left = node;
        node.parent = parent;
        return;
      }else{
        this.#addRecursive(parent.left,node)
      }
    }
    else{
      if(!parent.right){
        parent.right = node;
        node.parent = parent;
        return;
      }else{
        this.#addRecursive(parent.right,node)
      }
    }
  }
}


class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.parent = null;
  }
}

const tree = new BinaryTree();

tree.add(new Node(1))
tree.add(new Node(2))
tree.add(new Node(2))

console.log(tree.root.left)
console.log(tree.root.right)




