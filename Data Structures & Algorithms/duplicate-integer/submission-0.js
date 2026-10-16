class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicateArr = []
        for(let num of nums){
            if(duplicateArr.includes(num)){

                return true
            }
            duplicateArr.push(num)
        }
        return false
    }
}
