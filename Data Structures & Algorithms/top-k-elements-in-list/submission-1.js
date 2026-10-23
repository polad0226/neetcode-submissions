class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = new Map()

        for (let k of nums){
            if(hashMap.has(k)){
                hashMap.set(k,hashMap.get(k) +1)
            }
            else{
                hashMap.set(k,1)
            }
        }
        
        const sorted = [...hashMap.entries()].sort((a,b)=>b[1]-a[1])
        return sorted.slice(0,k).map(([key,val])=>key)
    }
}
