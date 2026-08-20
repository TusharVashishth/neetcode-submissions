class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let myset = new Set()
        let l = 0;
        let res = 0
        
        for(let i=0; i<s.length; i++) {

            while(myset.has(s[i])) {
                myset.delete(s[l])
                l++
            }

            myset.add(s[i])
            res = Math.max(res , i-l+1)
        }

        return res
        

    }
}
