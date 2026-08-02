class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {

        const stack = []
        const paths = path.split("/")

        // console.log("The path is" , paths)

        for(const cur of paths) {

            if(cur == "..") {
                if(stack.length) stack.pop()
            } else if(cur != '' && cur !== ".") {
                stack.push(cur)
            }
        }

        // console.log("The stack is" , stack)
        return "/"+stack.join("/")
        

    }
}
