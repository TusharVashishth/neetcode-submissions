class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        let freq = new Map()
        let n = nums.length;
        let appread = Math.floor(n/3)
        let res = []

        for(let i=0; i<n; i++) {
            freq.set(nums[i] , (freq.get(nums[i]) || 0) + 1 )
        }
        console.log("The freq is" , freq)

        for(let [key , value] of freq.entries()) {
            console.log(`the value is ${key} - ${value}`)

            if(value > appread) {
                res.push(key)
            }
        }

        return res;

    }
}
