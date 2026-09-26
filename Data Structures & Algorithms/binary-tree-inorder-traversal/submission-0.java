/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    ArrayList<Integer> res;

    public List<Integer> inorderTraversal(TreeNode root) {
        res = new ArrayList<Integer>();
        inOrder(root);

        return res;
    }

    private void inOrder(TreeNode root) {
        if (root == null)
            return;

        inOrder(root.left);
        // System.out.println("The value is " + root.val);
        res.add(root.val);
        inOrder(root.right);
    }
}