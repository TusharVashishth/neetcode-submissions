class StockSpanner {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.stack.push(price)
        return this.consecutiveDay(price)
        
    }

    consecutiveDay(val) {
        if(this.stack.length == 1) return 1
        let i = this.stack.length - 1;
        let consDay = 0
        while(i >= 0) {
            if(this.stack[i] <= val) {
                consDay++
            } else {
                break;
            }
            i--;
            
        }

        return consDay;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
