class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        // *** The Brute force solution for this 
        // let out = [];
        // let find = false

        // for(let i=0; i<numbers.length; i++) {

        //     for(let j=1; j<numbers.length; j++) {

        //         if((numbers[i] !== numbers[j]) && ((numbers[i] + numbers[j]) == target)) {
        //             find = true;
        //             out.push(i+1)
        //             out.push(j+1)
        //             break;
        //         }

        //         if(find) {
        //             break;
        //         }
        //     }

        // }

        // if(find) {
        //     return out
        // }

        // return false


        // ********** Optimized solution using 2 pointers

        let left = 0;
        let right = numbers.length -1

        while(left < right) {

            // Check if we found
            if((numbers[left] + numbers[right] ) === target) {

                return [left+1 , right+1]
            } 

            if((numbers[left] + numbers[right]) > target) {
                right--;
            } else {
                left++;
            }

        }

        return []

    }
}
