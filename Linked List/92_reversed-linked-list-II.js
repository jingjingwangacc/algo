/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(-1);
    let p = dummy, p1 = head;

    // calc prev nodes
    // prev -> reversed nodes -> following
    for (let i = 1; i < left; i++) {
        p.next = p1;
        p1 = p1.next;
        p = p.next;
    }
    let prev = p;
    let tail = p1;
    p = p1;
    p1 = p1.next;
    for (let i = 0; i < right - left; i++) {
        let next = p1.next;
        p1.next = p;
        p = p1;
        p1 = next;
    }
    // now p = 4, p1 = 5
    prev.next = p;
    tail.next = p1;
    return dummy.next;
};