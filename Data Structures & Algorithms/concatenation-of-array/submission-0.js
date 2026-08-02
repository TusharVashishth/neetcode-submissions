class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

       let ans = [...nums , ...nums]

        console.log("The ans is" , ans)
        return ans

    }
}
