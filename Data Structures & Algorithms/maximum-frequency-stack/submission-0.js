class FreqStack {
    constructor() {
        this.stack = []
        this.freq = new Map()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.freq.set(val, (this.freq.get(val) || 0) + 1)
    }

    /**
     * @return {number}
     */
    pop() {
        const maxCnt = Math.max(...this.freq.values());
        let i = this.stack.length - 1; 
        while(this.freq.get(this.stack[i]) !== maxCnt) {
            i--;
        }

        const val = this.stack.splice(i,1)[0]
        this.freq.set(val , this.freq.get(val) -1)
        return val
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
