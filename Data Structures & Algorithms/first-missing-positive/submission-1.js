class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {

        // let maxNum = 0
        // let mySet = new Set()
        // let res = 1;

        // for(let num of nums) {
        //     if(num > maxNum) {
        //         maxNum = num
        //     }
        //     mySet.add(num)
        // }

        // // One exception case 
        // if(maxNum == 0) return res;

        // for(let i=1; i<=maxNum; i++) {
        //     if(!mySet.has(i)) {
        //         return i;
        //     }
        // }

        // return ++maxNum;


        // With Cyclic Sort

        let n = nums.length
        let i =0;

        while(i < n) {
            const correctIndex = nums[i] - 1;

            // Swap value
            if(nums[i] > 0 && nums[i] <= n && nums[i] !== nums[correctIndex]) {
                [nums[i] , nums[correctIndex]] = [nums[correctIndex] , nums[i]]
            } else {
                i++;
            }
        }

        // console.log("The sorted value is" , nums)

        for(let i=0 ; i<n; i++) {
            if(nums[i] !== i+1) {
                return i+1
            }
        }

        return n+1;
    }
}
