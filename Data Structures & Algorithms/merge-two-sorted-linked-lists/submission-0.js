/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        // **** Recurring method **********
        // if(!list1) {
        //     return list2
        // }

        // if(!list2) return list1

        // if(list1.val < list2.val) {
        //     list1.next = this.mergeTwoLists(list1.next , list2)
        //     return list1
        // } else {
        //      list2.next = this.mergeTwoLists(list1 , list2.next)
        //     return list2
        // }

        let newNode = {val:0 , next:null}
        let dummy = newNode

        while(list1 && list2) {
            if(list1.val < list2.val) {
                dummy.next = list1
                list1 = list1.next
            } else {
                dummy.next = list2
                list2 = list2.next
            }

            dummy = dummy.next
        }

        if(list1) {
            dummy.next = list1
        } else {
            dummy.next = list2
        }

        return newNode.next

    }
}
