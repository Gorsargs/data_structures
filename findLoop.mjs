function findLoop (linkedList) {
  
  let slowNode = linkedList.head;
  let fastNode = linkedList.head.next;

  while(slowNode !== fastNode){
    slowNode = slowNode.next;
    fastNode = fastNode?.next?.next;
    if(slowNode.next === null){
      return false
    }
  }
  return true;
}