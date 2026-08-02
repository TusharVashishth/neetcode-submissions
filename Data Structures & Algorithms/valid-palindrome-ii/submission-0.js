class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        
        if(this.isValidPalindrom(s)) {
            return true;
        }

        // ***** Now check at most char

        let l =0;
        let r = s.length -1;

        while(l <r) {

            // ****** Try with to remove at most character 
            if(this.isValidPalindrom(s.slice(0,l) + s.slice(l+1)) || this.isValidPalindrom(s.slice(0,r) +s.slice(r+1))) {
                return true;
            }
            l++;
            r--;

        }

        return false;



    }

    isValidPalindrom(s) {

    if(s.length <=1) {
        return true
    }
  
    let res = true
    let l = 0;
    let r = s.length -1
    
    while(l < r) {
        if(s[l] !== s[r]) {
        return false
        }
        l++
        r--;
    }
    
    return res

    }
}
