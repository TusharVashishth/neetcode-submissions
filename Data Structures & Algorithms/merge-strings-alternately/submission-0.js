class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let newStr = [];
        let i =0
        let j =0


        while(i < word1.length || j < word2.length ) {

            if(i < word1.length) newStr.push(word1[i++]);
            if(j < word2.length) newStr.push(word2[j++]);


        }

        return newStr.join('');        

    }
}
