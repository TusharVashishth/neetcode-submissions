class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        
        let results = Array(temperatures.length).fill(0)
        let stack = [] // [temp , index]

        for(let i=0; i<temperatures.length; i++) {

            let t = temperatures[i]

            while(stack.length > 0 && t > stack[stack.length -1][0]) {

                const [temp , index] = stack.pop()

                results[index] = i - index

            }
            stack.push([t , i])

        }
        

        // for(let i=0; i<temperatures.length; i++) {
        //     let days = 0;
        //     let found = false
        //     for(let j=i+1; j<temperatures.length; j++) {
        //         days++;
        //         if(temperatures[j] > temperatures[i]) {
        //             found = true
        //             break;
        //         }

        //     }
        //     results[i] = found ? days : 0
        // }

        return results
    }
}
