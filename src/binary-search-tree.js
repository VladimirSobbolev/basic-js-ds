const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
  this.head = null
    this.length = 0;
 }
  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head
  }

  add(data) {
    if (this.length === 0) {
        this.head = new Node(data)
    } else {
        let actual = this.head;
        while (actual.next) {
            actual = actual.next;
        }
        actual.next = new Node(data);
    }
    this.length++;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};