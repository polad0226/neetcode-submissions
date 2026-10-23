class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hasmap = new Map()
        for(let str of strs){
            const sorted = str.split("").sort().join("")
            if(hasmap.has(sorted)){
                hasmap.get(sorted).push(str)
            }
            else{
                hasmap.set(sorted,[str])
            }
        }
       
        return [...hasmap.values()]
    }
}
