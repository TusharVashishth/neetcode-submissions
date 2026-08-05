class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        // ******* First divide array into 2 parts
        let l = 0;
        let r = nums.length -1
        let min = nums[0]

        while (l <= r) {

            // ***** First check the first and Last
            if(nums[l] < nums[r]) {
                min = Math.min(min , nums[l])
                break;

            }

            let m = l +  Math.floor((r-l) /2)
            min = Math.min(min , nums[m])

        
            if(nums[m] >= nums[l]) {
                l = m+1;

            } else {
                r = m-1
            }

        }

        return min

    }
}
