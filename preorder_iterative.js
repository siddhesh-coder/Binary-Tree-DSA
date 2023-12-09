function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

var preorderTraversal = function(root) {
    let preorder = [];
    let stack = [];
    
    if (root !== null) {
        stack.push(root);
    }

    while(stack.length !== 0){
     root = stack.pop();
     preorder.push(root.val);
     if(root.right !== null){
        stack.push(root.right);
     }
     if(root.left !== null){
        stack.push(root.left);
     }
    }
    return preorder;
};

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const result = inorderTraversal(tree);

console.log(result);
