class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {

        // Every boat can cary 2 people max but we have to also check the weight for those

        // Brute force
        people.sort((a,b) => a-b)
        console.log("the sorted aray" , people)

        let left = 0;
        let right = people.length - 1

        let boat = 0

        while(left <= right) {

            // Find the remaning weight which we need
            const remaning = limit - people[right]
            right--;
            boat++

            // Check if we can pair this with any person
            if(left <= right && remaning >= people[left]) {
                left++;
            }

            
        }

        return boat;
    }
}
