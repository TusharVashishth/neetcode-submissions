class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        // both indexs not equal and index1 < index2
        // we have to use O(1) space complexity 
        let l =0;
        let r = numbers.length-1

        while(l < r) {
            let sum = numbers[l] + numbers[r]
            if(sum == target) {
                return [l+1, r+1]
            } 
            if(sum > target) {
                r--;
            } else {
                l++;
            }
        }

        return []

    }
}
