class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let myset = new Set()

        let isDuplicate = false


        if(nums.length <= 1) {
            isDuplicate = false;
        }

        nums.forEach((item) => {

            if(myset.has(item)) {
                isDuplicate = true
            }
            myset.add(item)
            
        })

    return isDuplicate

    }
}
