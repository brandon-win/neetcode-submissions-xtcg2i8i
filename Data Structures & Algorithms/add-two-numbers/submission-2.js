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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = new ListNode(-1) // dummy node, the res will be head.next
        let curr = head
        let carryOver = 0

        while (l1 || l2 || carryOver) {
            const totalAdd = (l1?.val || 0) + (l2?.val || 0) + carryOver
            let sum = totalAdd
            if (totalAdd > 9) {
                carryOver =  Math.floor(totalAdd / 10)
                sum = totalAdd % 10
                console.log({carryOver, sum})
            } else {
                carryOver = 0
            }

            curr.next = new ListNode(sum)
            curr = curr.next

            if (l1) {
                l1 = l1.next
            }

            if (l2) {
                l2 = l2.next
            }
        }


        
        return head.next
    }
}

// approach

// traverse both l1 and l2 while creating another linked list
// if we have carryover use 3rd variable to track that
