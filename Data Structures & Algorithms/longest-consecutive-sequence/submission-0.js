class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        let set = new Set(nums)
        let res = 0;

        for(let n of nums) {

            // ***** Check if it the starting sequence
            if(!set.has(n-1)) {

                let length = 1;
                while(set.has(n+length)) {
                    length++
                }

                res = Math.max(res , length)

            }

        }

        return res
    }
}
