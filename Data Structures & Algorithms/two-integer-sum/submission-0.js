class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // ** Brute force approach

        // for(let i=0; i<nums.length; i++) {

        //     for(let j=i+1; j<nums.length; j++) {

        //         if((nums[i] + nums[j]) == target) {
        //             return [i ,j]
        //         }

        //     }

        // }

        // return []


        // ****** Optimized solution *********

        let myMap = new Map()

        for(let i in nums ) {

            let diff = target - nums[i]

            if(myMap.has(diff)) {
                return [parseInt(myMap.get(diff)) , parseInt(i)]
            }

            myMap.set(nums[i] , i)
        }

        return []



    }
}
