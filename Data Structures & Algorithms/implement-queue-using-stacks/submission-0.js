class MyQueue {
    constructor() {
        this.queue =[]
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        let ele = this.queue[0]
        this.queue.splice(0,1)
        return ele
    }

    /**
     * @return {number}
     */
    peek() {
        return this.queue[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length ==0 ? true : false
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
