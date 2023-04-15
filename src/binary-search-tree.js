const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    binareTree = [];

    root() {

        if (this.binareTree.length) {
            return {data: this.binareTree[0]}
        } else {
            return null
        }
    }

    add(data) {
        this.binareTree.push(data);
    }

    has(data) {
        return this.binareTree.includes(data);
    }

    find(data) {
        const item = this.binareTree.find((el) => el === data);
        if (item) {
            return {data: item}
        } else {
            return null
        }
    }

    remove(data) {
        this.binareTree = this.binareTree.filter((item) => item !== data);
    }

    min() {
        return Math.min(...this.binareTree);
    }

    max() {
        return Math.max(...this.binareTree);
    }


}

module.exports = {
    BinarySearchTree
};