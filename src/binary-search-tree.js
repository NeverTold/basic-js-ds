const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.rootNode = null;
  }

  root() {
      return this.rootNode;
  }

  add(data) {
      const newNode = new Node(data);

      if (!this.rootNode) {
          this.rootNode = newNode;
          return;
      }

      let current = this.rootNode;
      while (true) {
          if (data < current.data) {
              if (current.left) {
                  current = current.left;
              } else {
                  current.left = newNode;
                  return;
              }
          } else {
              if (current.right) {
                  current = current.right;
              } else {
                  current.right = newNode;
                  return;
              }
          }
      }
  }

  has(data) {
      return !!this.find(data);
  }


  find(data) {
     let current = this.rootNode;

      while (current) {
         if (data === current.data) {
              return current
         } else if (data < current.data) {
              current = current.left
         } else {
             current = current.right
         }
      }
     return null;
  }

  remove(data) {
     this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
     if(!node) return null;

     if (data < node.data) {
         node.left = this.removeNode(node.left, data);
         return node;
     } else if (data > node.data) {
         node.right = this.removeNode(node.right, data);
         return node;
     } else {
         if(!node.left && !node.right) {
              return null;
         }

         if (!node.left) {
              return node.right;
         }

         if (!node.right) {
              return node.left
         }

         let minRight = this.findMinNode(node.right);
         node.data = minRight.data;
         node.right = this.removeNode(node.right, minRight.data);
         return node;
     }

  }
    findMinNode(node) {
      let current = node;
      while (current.left) {
        current = current.left;
      }
      return current;
    }
 min() {
  if (!this.rootNode) return null;

    let current = this.rootNode
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    if (!this.rootNode) return null;

    let current = this.rootNode
    while (current.right) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};