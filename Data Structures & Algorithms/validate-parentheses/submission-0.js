class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
            var stack = [];
    
    var closeToOpen = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    
    for (var s of str) {
        
        // **** If it's opening bracate
        if(!closeToOpen[s]) {
            stack.push(s)
        } else if(stack.length > 0 && closeToOpen[s]) {
            var top = stack.pop()
            if(top !== closeToOpen[s]) {
                return false;
            }
            
        } else {
            return false
        }
        
        
    }
    
    return stack.length == 0
    }
}