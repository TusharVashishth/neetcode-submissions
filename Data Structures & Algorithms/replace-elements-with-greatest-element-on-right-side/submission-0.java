class Solution {
    public int[] replaceElements(int[] arr) {
        // for (int i = 0; i < arr.length - 1; i++) {
        //     int max = arr[i + 1];

        //     for (int j = i + 1; j < arr.length; j++) {
        //         if (arr[j] > max) {
        //             max = arr[j];
        //         }
        //     }

        //     arr[i] = max;
        // }

        // arr[arr.length - 1] = -1;

        int rightMax = -1;
        int n = arr.length;
        int[] ans = new int[n];

        for(int i = n-1; i>= 0; i--){
            ans[i] = rightMax;
            rightMax = Math.max(rightMax , arr[i]);
        }

        return ans;
    }
}