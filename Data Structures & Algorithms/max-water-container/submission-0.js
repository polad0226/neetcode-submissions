class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let l = 0
        let r = heights.length-1
        let res = 0

        while(l<r){
            let lenght = r-l
            let height = Math.min(heights[r],heights[l])
            res = Math.max(res,lenght* height)
            if(heights[r] > heights[l]){
                l++;
            }
            else{
                r--;
            }
        }
        return res
    }
}
