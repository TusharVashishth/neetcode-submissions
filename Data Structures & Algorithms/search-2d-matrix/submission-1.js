class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        // ****** Brute force problem *****

        // for(let row of matrix) {
        //     console.log("The row is" , row)
        //     for(let i=0; i< row.length; i++) {
        //         if(target == row[i]) {
        //             return true
        //         }
        //     }

        // }


        // ***** Banary Search *******

        // ***** First find the row where we can have the value
        let rowIndex = undefined
        for(let i=0; i<matrix.length; i++) {

            let row = matrix[i]
            if((target >= row[0]) && (target <= row[row.length-1])) {
                rowIndex = i
                break;
            }
            
        };

        // ***** If there is no index 
        if(rowIndex === undefined) {
            return false
        }

        let row = matrix[rowIndex]

        // ***** Apply the binary search
        let l = 0;
        let r = row.length-1

        while(l <= r) {

            let m =  Math.floor((l+r)/2)

            if(target > row[m]) {
                l = m+1
            } else if(target < row[m]) {
                r = m-1
            } else {
                return true;    
            }

        }

        return false

    }
}
