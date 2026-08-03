class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {

        // 7 -> 49
        // r = 6 , 4 -> 16
        let l = 1
        let r = x
        let res = 0

        while (l <= r) {

            const mid = Math.floor((l+r)/2)
        

            if(mid * mid < x) {
                l = mid +1
                res = mid
            } else if(mid * mid > x) {
                r = mid -1
            } else {
                return mid;
            }


        }

        return res

    }
}
