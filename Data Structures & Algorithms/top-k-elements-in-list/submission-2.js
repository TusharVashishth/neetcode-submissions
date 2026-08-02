class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const freq = {}

        for(let num of nums) {
            freq[num] = (freq[num] || 0) + 1
        }

        console.log("The freq is" , freq)

        const results = Object.entries(freq).map(([num , freq]) => [freq , parseInt(num)])
        console.log("The result is" , results)
        results.sort((a,b) => b[0] - a[0])

        return results.slice(0,k).map((pair) => pair[1])
        
    }
}
