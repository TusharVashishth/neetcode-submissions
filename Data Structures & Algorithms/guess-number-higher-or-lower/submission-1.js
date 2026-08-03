/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {

    let l = 1;
    let r = n

    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    // 1 -> 8 -> l = 9 -> 


    while(l <= r) {
        const mid = Math.floor((l+r)/2)

        if(guess(mid) == -1) {
            r = mid- 1
        } else if(guess(mid) == 1) {
            l = mid + 1
        } else {
            return mid
        }
    }

     

    }
}
