const Node = require('./node');

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.size = 0;
  }

  push(data, priority) {}

  pop() {}

  detachRoot() {}

  restoreRootFromLastInsertedNode(detached) {}

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size > 0;
  }

  clear() {
    this.root = null;
    this.parentNodes = [];
    this.size = 0;
  }

  insertNode(node) {}

  shiftNodeUp(node) {}

  shiftNodeDown(node) {}
}

module.exports = MaxHeap;
