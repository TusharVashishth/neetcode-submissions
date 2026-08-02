class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        if(strs.length === 1) {
            return strs
        }

        let prefix = strs[0]

        for(let i=1; i<strs.length; i++) {
            let j=0;

            while(j < Math.min(prefix.length , strs[i].length)) {

                if(prefix[j] !== strs[i][j]) {
                    break;
                }

                j++;
            }

            prefix = prefix.slice(0,j)
            
        }

        
        return prefix

      

        // for(let i=0; i<strs.length; i++) {
        //     for(let j=i+1; j<strs.length; j++) {

        //         if(strs[i][strIC] !== strs[j][strIC]) {
        //             return output
        //         }
        //     }

        //     output +=strs[i][strIC]
        //     strIC++


        // }

    }

   
    
}
