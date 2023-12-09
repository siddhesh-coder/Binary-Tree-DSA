function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

var inorderTraversal = function(root) {
    let inorder = [];
    let stack = [];

    while(true){
      if(root !== null){
         stack.push(root);
         root = root.left;
      }else{
        if(stack.length === 0){
          break;
        }
        root = stack.pop();
        inorder.push(root.val);
        root = root.right;
      }
    }
    return inorder;
};
const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const result = inorderTraversal(tree);

console.log(result);
