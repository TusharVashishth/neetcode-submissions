class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {

       let left = 0;
       let sum = 0
       let res = Infinity
       for(let right = 0; right < nums.length; right++) {

        sum += nums[right]

        while(sum >= target) {
            res = Math.min(right-left +1 , res) // get the window size
            sum -= nums[left] 
            left++
        }
       }

       return res == Infinity ? 0 : res

    }
}
