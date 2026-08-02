class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        
        const n = nums.length
        k = k % n
        if(k==0) return 

        function reverse(start ,end) {

            while(start < end) {
                [nums[start] , nums[end]] = [nums[end] , nums[start]]

                start++
                end--
            }

        }

        reverse(0 , n-1) // reverse complete array
        reverse(0 , k-1) // reverse the first k element
        reverse(k , n-1)

    }

    

   
}
