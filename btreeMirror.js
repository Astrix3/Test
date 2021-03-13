

const _ = require('lodash');

/* 
Given the following class structure
*/

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}


/*
The following builds a simple tree.
*/
const root = new Node(1);

const left = new Node(2);

const leftOfLeft = new Node(3);
const rightOfLeft = new Node(4);

left.left = leftOfLeft;
left.right = rightOfLeft;

const right = new Node(6);

root.left = left;
root.right = right;

/*
  1   |  1
 2  6 | 6  2
3 4   |   4 3*/


/**
Complete this method that takes a tree and returns a mirror image
*/
console.log(root)
function mirror(tree) {
  let mirrorImage = null;
  mirrorImage = swapAndCheck(tree);
  console.log(mirrorImage);
  
  // pick value 
  // swap left right
  // check left or right if not null
  // if null end
  // if not null traverse and swap
  
  return mirrorImage;
}

function swapAndCheck(treeNode) {

  let {right} = treeNode;

  treeNode.right = (treeNode.left !== null) ? swapAndCheck(treeNode.left) : treeNode.left;
  treeNode.left = (right !== null) ? swapAndCheck(right) : right;

return treeNode;
}

mirror(root);