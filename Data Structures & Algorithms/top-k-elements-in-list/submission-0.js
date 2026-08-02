class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        if(nums.length <= k) {
            return nums
        }

        let freq = {}
        for(let item of nums) {
            freq[item] = (freq[item] || 0) +1
        }

        // It will return the frequency

        const newArr = Object.entries(freq).map(([num , freq]) => [freq , parseInt(num)])

        newArr.sort((a ,b) => b[0] - a[0])

        return newArr.slice(0,k).map((pair) => pair[1])

    }
}
