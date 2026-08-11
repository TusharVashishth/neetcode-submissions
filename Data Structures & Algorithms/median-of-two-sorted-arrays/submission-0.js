class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // The brute force solution
        let newArray = nums1.concat(nums2);
        newArray.sort((a, b) => a - b);

        // console.log("The sorted array is", newArray);

        // Check if the array length is even or odd
        const n = newArray.length;

        if (n === 2) {
            return (newArray[0] + newArray[1]) / 2;
        }

        if (n % 2 === 0) {
            let med = n / 2;

            return (newArray[med - 1] + newArray[med]) / 2;
        } else {
            let med = Math.ceil(n / 2);
            return newArray[med - 1];
        }
    }
}
