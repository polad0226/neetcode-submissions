class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         let arr = []
        for (let str of strs){
            let count = str.length
            let encodedStr = `${count}#${str}`
            arr.push(encodedStr)
        }
        
        return arr.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i =0
        let j
        while(i<str.length){
            j = i
            while(str[j]  != '#'){
                j = j+1 
            }
            let num = Number(str.slice(i,j))
            let word = str.slice(j+1,j+1+num)
            res.push(word)

            i = j+1 + num
        }

        return res

    }
}
