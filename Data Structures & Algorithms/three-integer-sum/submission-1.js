class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorTed = nums.sort((a,b)=>a-b)
        const res  = []

        for(let [index,value] of nums.entries()){
            if(index >0 && nums[index -1] === value){
                continue
            }
            let l = index+1;
            let r = nums.length-1;

            while(l<r){
                let threeSum  = value + nums[l] + nums[r];
                if(threeSum >0){
                    r--;
                }
                else if (threeSum <0){
                    l++;
                }
                else{
                    res.push([value,nums[l],nums[r]])
                    l++;
                    r--;

                    while(l<r && nums[l] === nums[l-1] ){
                        l++
                    }
                    while(l<r && nums[r] === nums[r+1]){
                        r--;
                    }

                }
            }
        }

        return res

    }
}
