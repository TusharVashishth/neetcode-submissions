class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length != t.length) {
            return false
        }
        
        let sVol = {}
        let tVol = {}



        for(let i=0; i<s.length; i++) {

            sVol[s[i]] =  (sVol[s[i]] || 0) + 1
            tVol[t[i]] =  (tVol[t[i]] || 0) + 1
        }

        for(let key of s) {
            if(sVol[key] != tVol[key]) {
                return false
            }
        }



        return true

    }
}
