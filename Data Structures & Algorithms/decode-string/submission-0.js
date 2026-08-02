class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {

        const stack = []

        for(let i=0; i<s.length; i++) {
            const char = s[i]

            if(char !== ']') {
                stack.push(char)
            } else {

                let subStr = ''
                while(stack[stack.length -1] !== '[') {
                    subStr = stack.pop() + subStr
                }

                stack.pop()

                // Now check for the number how many times we need to add
                let k = ''
                while(stack.length > 0 && !isNaN(stack[stack.length -1])) {
                    k = stack.pop() + k
                }

                stack.push(subStr.repeat(parseInt(k ,10)))

            }
        }
        
        return stack.join('')
    }
}
