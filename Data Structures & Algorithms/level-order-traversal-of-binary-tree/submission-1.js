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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let res = []
        let queue = [root]
        let front = 0

        while(queue.length > front ){
            const size = queue.length - front
            let arr = []
            for(let i =0;i<size;i++){
                let curr = queue[front]
                front++;
                arr.push(curr.val)
                    // [1,2,3,4,5,6,7]
                if(curr.left){
                    queue.push(curr.left)
                }
                if(curr.right){
                    queue.push(curr.right)
                }

            }
            res.push(arr)

            
           
        }
    
    return res

        
    }
}
