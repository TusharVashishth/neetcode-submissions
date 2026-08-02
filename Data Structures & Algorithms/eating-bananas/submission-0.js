class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        // *** Brute force solution 
        // let k = 1
        // while (true) {
        //     let totalTime = 0;
        //     for(let p of piles) {
        //         totalTime += Math.ceil(p/k)
        //     }

        //     console.log("The totla time is" , totalTime)

        //     if(totalTime <= h) {
        //         return k
        //     }

        //     k++;

        // }


        // ******* Binary Search Solution **********
        let l = 1;
        let r = Math.max(...piles)
        let res = r
        // let res = 
        while (l <= r) {

            let m = Math.floor((l+r)/2)
            let totalHours = 0

            // ******* check how many hours we need *******
            for(let pile of piles) {
                totalHours += Math.ceil(pile/m)
            }

            if(totalHours <= h) {
                res = m
                r = m - 1
            } else  {
                l = m+1
            }
        }

        return res
    }
}
