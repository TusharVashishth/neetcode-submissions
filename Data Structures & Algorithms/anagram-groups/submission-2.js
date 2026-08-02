class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let tempMap = {}

        for(let str of strs) {

            // ****** Sort the str
            // let sorted = str.toLowerCase().split('').sort().join('')
            
            const count = new Array(26).fill(0)

            for(let c of str) {
                count[c.charCodeAt() - 'a'.charCodeAt()] += 1
            }

            const key = count.join(",")

            if(!tempMap[key]) {
                tempMap[key] = []
            }
            tempMap[key].push(str)
        }
        
        // console.log("The sorted temp is" , tempMap)

        return Object.values(tempMap)

    }
}
