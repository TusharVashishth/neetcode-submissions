class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {

        // [1,2,3,4,5,6,7,8,9]
        let l = 0
        let r = nums.length - 1
        let res = nums.length

        while (l <= r) {
            const mid = Math.floor((l+r) / 2)

            if(nums[mid] == target) return mid

            if(nums[mid] > target) {
                res = mid 
                r = mid -1
            } else {
                l = mid +1
            }
        }

        return res;


    }
}
