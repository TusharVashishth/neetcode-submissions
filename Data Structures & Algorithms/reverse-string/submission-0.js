class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {


        // ****** My brute force solution ****** 

        // let rs = undefined

        // for(let i=s.length; i>=0; i--) {
        //     if(rs) {
        //         rs += s[i]
        //     } else {
        //         rs = s[i]
        //     }
            
        // }
        // rs.split("").forEach((item ,i) => {

        //     s[i] = item
        // })
             

        // return s


    // Using 2 pointers

        let l = 0;
        let r = s.length -1

        while(l <r) {

            // Swap the value
            [s[l] , s[r]] = [s[r] ,s[l]]
            l++;
            r--

        }

    }
}
