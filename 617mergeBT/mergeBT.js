// Input: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
}

const tA = new TreeNode(1);
tA.left = new TreeNode(3);
tA.right = new TreeNode(2);
tA.left.left = new TreeNode(5);

const tB = new TreeNode(2);
tB.left = new TreeNode(1);
tB.right = new TreeNode(3);
tB.left.right = new TreeNode(4);
tB.right.right = new TreeNode(7);

const sumTree = new TreeNode(3);
sumTree.left = new TreeNode(4);
sumTree.right = new TreeNode(5);
sumTree.left.left = new TreeNode(5);
sumTree.left.right = new TreeNode(4);
sumTree.right.right = new TreeNode(7);

const traverseTree = function(root) {
  let output = [root.val];
  if (root.left) {
    output = output.concat(traverseTree(root.left));
  }
  if (root.right) {
    output = output.concat(traverseTree(root.right));
  }
  return output;
}

var mergeTrees = function(t1, t2) {
  const m = new TreeNode();
  if (t1 && t2) {
    m.val = (t1.val + t2.val);
    m.left = mergeTrees(t1.left, t2.left);
    m.right = mergeTrees(t1.right, t2.right);
  } else {
    if (t1) {
      m.val = t1.val;
        m.left = mergeTrees(t1.left);
        m.right = mergeTrees(t1.right);
    } else if (t2) {
      m.val = t2.val;
        m.left = mergeTrees(t2.left);
        m.right = mergeTrees(t2.right);
    } else {
      return null;
    }
  }
  return m;
};

console.log(mergeTrees(tA, tB));
