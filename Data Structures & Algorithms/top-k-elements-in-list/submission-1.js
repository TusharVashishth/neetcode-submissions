class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const counts = {}
        const freq = Array.from({length:nums.length+1} ,() => [])

        // ***** Take the frequence
        for (let n of nums) {
            counts[n] = (counts[n] || 0) + 1
        }

        // ****** Now add counts to freq array
        for(let c in counts) {
            freq[counts[c]].push(parseInt(c))
        }

        console.log("The freq is" , freq)

        // ******* Hold the res *******
        let res = []
        for(let i = freq.length -1; i>0; i--) {
            for(let n of freq[i]) {
                res.push(n)
                if(k === res.length) {
                    return res
                }
            }
            
            
        }
        
    }
}
