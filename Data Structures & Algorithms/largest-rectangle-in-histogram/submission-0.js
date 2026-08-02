class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

       let stack = [];
    let maxArea = 0;
    const n = heights.length;
    
    for (let i = 0; i <= n; i++) {
        // If we reach the end, treat the height as 0 to force clear the stack
        let currentHeight = (i === n) ? 0 : heights[i];
        
        // While the current bar is shorter than the bar at the top of the stack
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()]; // The height of the popped bar
            
            // If the stack is empty, this bar was the shortest so far, 
            // so its width extends all the way back to the beginning (index 0).
            let w = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, h * w);
        }
        
        stack.push(i);
    }
    
    return maxArea;

    }
}
