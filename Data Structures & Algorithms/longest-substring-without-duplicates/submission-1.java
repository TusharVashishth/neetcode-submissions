class Solution {
    public int lengthOfLongestSubstring(String s) {
        var hashSet = new HashSet<Character>();

        var l = 0;
        var res = 0;

        for (int r = 0; r < s.length(); r++) {
            // Check if char already exists then remove it and increase left counter
            while (hashSet.contains(s.charAt(r))) {
                hashSet.remove(s.charAt(l));
                l++;
            }

            hashSet.add(s.charAt(r));
            res = Math.max(res , r - l + 1);

        }

        return res;
    }
}
