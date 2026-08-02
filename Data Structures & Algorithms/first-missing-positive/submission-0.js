class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {

        let maxNum = 0
        let mySet = new Set()
        let res = 1;

        for(let num of nums) {
            if(num > maxNum) {
                maxNum = num
            }
            mySet.add(num)
        }

        // One exception case 
        if(maxNum == 0) return res;

        for(let i=1; i<=maxNum; i++) {
            if(!mySet.has(i)) {
                return i;
            }
        }

        return ++maxNum;
    }
}
