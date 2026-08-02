class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        // let res = []

        // for(let i=0; i<nums.length; i++) {

        //     let tempVal = 1
        //     for(let j=0; j<nums.length; j++) {

        //         if(i == j) {
        //             continue;
        //         } 

        //         tempVal = tempVal * nums[j]
        //     }

        //     res.push(tempVal)
        // }

        // return res;

        // Divison Optimized

        let zeros = 0
        let prod = 1

        for(let n of nums) {
            if(n !== 0) {
                prod *=n
            } else {
                 zeros++
            }
        }

        console.log("The prod and zero data is" , prod , zeros)

        if(zeros > 1) {
            return Array(nums.length).fill(0)
        } 

        const res = new Array(nums.length)

        for(let i=0 ; i<nums.length;i++) {
            if(zeros > 0) {
                res[i] = nums[i] === 0 ? prod :0
            } else {
                res[i] = prod/nums[i]
            }
        }

        return res;

    }
}
