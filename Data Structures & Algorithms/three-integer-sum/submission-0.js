class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        if(nums.length <=0) return []

        let res = []

        // ***** Sort the array
         nums.sort((a,b) => a-b)
        console.log("The sorted array is" , nums)

        for(let i=0; i<nums.length; i++) {

            if(nums[i] > 0) break;

            let l = i+1;
            let r = nums.length -1

            // ***** Check the duplicate number
            if(i > 0 && nums[i] == nums[i-1]) continue;

            while(l < r) {
                const sum = nums[i] + nums[l] + nums[r]

                if(sum > 0) {
                    r--;
                } else if(sum < 0) {
                    l++
                } else {
                    res.push([nums[i] , nums[l] , nums[r]])
                    l++;
                    r--;

                    // ***** Check l duplicate 
                    while(l < r && nums[l] == nums[l-1]) {
                        l++;
                    }
                }
            }


        }

        return res

    }
}
