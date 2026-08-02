class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        // O(n2)
        const len = nums.length
        // for(let i=0; i< len; i++) {
        //     for(let j=i+1; j<len; j++) {
                
        //         // swap value if it's big
        //         if(nums[i] > nums[j]) {
        //             [nums[i] , nums[j]] = [nums[j] , nums[i]]
        //         } 
                
        //     }

        // }

        // Bubble Sort (place big element at the end on each iteration)

        for(let i=0; i < len; i++) {
            for(let j=0; j<len-1-i; j++) {
                if(nums[j] > nums[j+1]) {
                    [nums[j] , nums[j+1]] = [nums[j+1] , nums[j]]
                }
            }
        }

        return nums

    }
}
