class StockSpanner {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 1

        while(this.stack.length && this.stack[this.stack.length -1][0] <= price){
            span += this.stack.pop()[1]
        }

        this.stack.push([price ,span])
        console.log("The stack is" , this.stack)
        return span
        
    }

    // consecutiveDay(val) {
    //     if(this.stack.length == 1) return 1
    //     let i = this.stack.length - 1;
    //     let consDay = 0
    //     while(i >= 0) {
    //         if(this.stack[i] <= val) {
    //             consDay++
    //         } else {
    //             break;
    //         }
    //         i--;
            
    //     }

    //     return consDay;
    // }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
