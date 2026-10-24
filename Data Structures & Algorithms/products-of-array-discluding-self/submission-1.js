class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = []
        let profix = []
        let res = []
        let n = nums.length;
        prefix[0] = 1
        profix[n-1] = 1
        for(let i=1;i<n;i++){
            prefix[i] = prefix[i-1] * nums[i-1]

        }
        for(let i=n-2;i>=0;i--){
            profix[i] = nums[i+1] * profix[i+1]

        }
        for (let i = 0; i < n; i++) {
            res[i] = prefix[i] * profix[i];
        }
        return res;

        
    }
}
