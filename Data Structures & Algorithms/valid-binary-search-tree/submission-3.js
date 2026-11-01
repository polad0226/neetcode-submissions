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
     * @return {boolean}
     */
    isValidBST(root) {
         if (!root) return true;
         
        let queue = [{"node":root,"min":-Infinity,"max":Infinity}]
        let front = 0

        while(queue.length >front){

            let {node,min,max} = queue[front]
            front++;

            if(node.val <=min || node.val >=max ){
                return false
            }
            if(node.left){
                
                queue.push({"node":node.left,"min":min,"max":node.val})
                
            }
            if(node.right){
               queue.push({"node":node.right,"min":node.val,"max":max})
            }


        }
        return true


    }
}
