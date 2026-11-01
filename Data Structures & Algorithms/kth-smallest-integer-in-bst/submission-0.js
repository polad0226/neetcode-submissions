/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let arr = []
        let front = 0
        let queue = [root]
        while(queue.length > front){
            let curr = queue[front]
            front++
            arr.push(curr.val)

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }

        return arr.sort((a,b)=>a-b)[k-1]

    }
}
