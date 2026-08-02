class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // let count = 0
        // let n = nums.length

        // for(let i=0; i<n; i++) {
        //     if(nums[i] == k) {
        //         count++
        //     }
        //     let sum = nums[i]
        //     for(let j=i+1; j < n; j++) {

        //         sum += nums[j]
        //         console.log("The sum is" , sum)
        //         if(sum == k) count++;

        //     }
        // }

        // return count

        let map = new Map()
        let res = 0
        let curSum = 0
        map.set(0 ,1) // if in case first element = to tagget

        for(let num of nums) {
            curSum += num
            let diff = curSum - k;
            res += map.get(diff) || 0
            map.set(curSum , (map.get(curSum) || 0) + 1)
        }

        return res;
    }
}
