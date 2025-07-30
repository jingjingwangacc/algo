var addTwoNumbers = function(l1, l2) {
    // add two numbers
    // if it's < 10, put the value
    // if it's > 10, put mod 10, and carry to be 1
    let dummy = new ListNode(-1);
    let p = dummy;
    let p1 = l1, p2 = l2;
    let carry = 0;
    while (p1 || p2 || carry > 0) {
        let val = carry;
        if (p1) {
            val += p1.val;
            p1 = p1.next;
        }
        if (p2) {
            val += p2.val;
            p2 = p2.next;
        }
        carry = Math.floor(val / 10);
        p.next = new ListNode(val % 10);
        p = p.next;
    }
    // if (carry > 0) {
    //     p.next = new ListNode(carry);
    //     p = p.next;
    //     p.next = null;
    // }

    return dummy.next;  
};