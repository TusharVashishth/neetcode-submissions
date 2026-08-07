class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let data = this.keyStore.get(key) || []
        // console.log("The data is" , data)
        let l = 0;
        let r = data.length - 1
        let result = ""

        while (l <= r) {
            const mid = l + Math.floor((r-l)/2)

            if(data[mid][0] <= timestamp) {
                result = data[mid][1]
                l = mid +1
            } else {
                r = mid -1
            }
        }

        return result
    }
}
