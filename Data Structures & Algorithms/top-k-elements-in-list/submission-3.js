class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // const freq = {}

        // for(let num of nums) {
        //     freq[num] = (freq[num] || 0) + 1
        // }

        // console.log("The freq is" , freq)

        // const results = Object.entries(freq).map(([num , freq]) => [freq , parseInt(num)])
        // console.log("The result is" , results)
        // results.sort((a,b) => b[0] - a[0])

        // return results.slice(0,k).map((pair) => pair[1])

        // Bucket Sort Algo

        const count = {}
        const freq = Array.from({length:nums.length+1} , () => [])

        // ***** Count the freqency 
        for(let i of nums) {
            count[i] = (count[i] || 0) +1
        }

        // *** Place freq element in freq array and use 
        for(let i in count) {
            freq[count[i]].push(parseInt(i))
        }

        console.log("The freq is" , freq)
        console.log("The count map is" , count)

        let res = []

        for(let i=freq.length-1; i>0; i--) {
            for(let n of freq[i]) {
                console.log("The n is" , n)
                res.push(n)

                if(res.length === k) {
                    return res
                }
            }
        }
        
    }
}
