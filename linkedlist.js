import Node from './node';

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.nodeCount = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode == null) {
      this.tailNode = newNode;
      this.headNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }
    this.nodeCount++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.headNode == null) {
      this.tailNode = newNode;
      this.headNode = newNode;
    } else {
      let oldHead = this.headNode;
      this.headNode = newNode;
      this.headNode.nextNode = oldHead;
    }
    this.nodeCount++;
  }

  size() {
    return this.nodeCount;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  find(value) {
    let currentNode = this.headNode;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  at(searchIndex) {
    let currentNode = this.headNode;
    let index = 0;
    while (currentNode !== null) {
      if (searchIndex === index) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  pop() {
    if (this.tailNode === null) {
      return null;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode != this.tailNode) {
      currentNode = currentNode.nextNode;
    }
    let nodeValue = this.tailNode.value;
    this.tailNode = currentNode;
    this.tailNode.nextNode = null;
    this.nodeCount--;
    return nodeValue;
  }

  contains(value) {
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  toString() {
    let result = '';
    let currentNode = this.headNode;
    while (currentNode !== null) {
      result += `( ${currentNode.value} )`;
      result += ' -> ';
      currentNode = currentNode.nextNode;
    }
    return (result += 'null');
  }

  insertAt(value, searchIndex) {
    if (searchIndex === 0) {
      this.prepend(value);
    } else {
      let currentNode = this.headNode;
      let index = 0;
      while (currentNode !== null && index < searchIndex - 1) {
        currentNode = currentNode.nextNode;
        index++;
      }
      const newNode = new Node(value);
      const next = currentNode.nextNode;
      currentNode.nextNode = newNode;
      newNode.nextNode = next;
    }
    this.nodeCount++;
  }

  removeAt(index) {
    // implement me
    return null;
  }
}
