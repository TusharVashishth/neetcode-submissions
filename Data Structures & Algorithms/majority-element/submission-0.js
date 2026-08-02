class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        const size = Math.floor(nums.length/2)
        const freq = {}

        for(let i of nums) {
            // console.log("The i is" , i)
            freq[i] = (freq[i] || 0) +1
        }
        // console.log("The freq is" , freq ,size)

        for (let item in freq) {
            if(freq[item] > size) {
                return item;
            }
        }
       
       return null

    }
}
