class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const mySet = new Set()
        nums.forEach((a)=> mySet.add(a))
        const myArr = [...mySet].sort((a,b)=>a-b)
        const myMax= []
        let j = 0
        let i = 0
        while(j<myArr.length){

        const myLongestArr= [myArr[j]]
        for(i=j+1;i<myArr.length;i++){
            if(myArr[i] - myLongestArr.at(-1) === 1){
                myLongestArr.push(myArr[i])
                j=i
            }
        }
        if(j !== i){
            j=j+1
        }
        

    myMax.push(myLongestArr)



    }
        let max = 0
myMax.forEach((a)=>{
        max = Math.max(max,a.length)
    })
    return  max
    
    }
}
