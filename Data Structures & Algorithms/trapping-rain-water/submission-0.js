class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        if(height.length <=0) {
            return 0;
        }

        // let n = height.length;
        let res = 0;

        // for(let i=0; i<n; i++) {

        //     // ****** Get Max left and right for current position
        //     let leftMax = height[i];
        //     let rightMax = height[i]


        //     // ****** Check for left max
        //     for(let j=0; j<i; j++) {
        //         leftMax = Math.max(leftMax , height[j])
        //     }

        //     // ****** Check for left max
        //     for(let j=i+1; j<n; j++) {
        //         rightMax = Math.max(rightMax , height[j])
        //     }

        //     console.log("The left max" , leftMax)
        //     console.log("The right max" , rightMax)

        //     res += Math.min(leftMax , rightMax) - height[i]

        //      console.log("The res max" , res)

        // }


        // **** TWO Pointer

        let l = 0
        let r = height.length -1

        let leftMax = height[l]
        let rightMax = height[r]

        while(l < r) {

            if(leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax , height[l])
                res += leftMax - height[l]
            } else {
                r--
                rightMax = Math.max(rightMax , height[r])
                res += rightMax - height[r]
            }

        }

        return res

    }
}
