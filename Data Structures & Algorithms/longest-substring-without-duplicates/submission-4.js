class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l =0 
        let r =0

        let set = new Set()
        let longest = 0
        while(r<s.length){

            if(!set.has(s[r])){
                
                set.add(s[r])
                r++
            }
            longest = Math.max(longest,r-l)
           
                
                while(set.has(s[r])){
                    set.delete(s[l])
                    l++
                }
        }
        return longest

    }
}
