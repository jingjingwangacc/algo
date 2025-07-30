var addTwoNumbers = function(l1, l2) {
    // push to a stack, FILO
    let stack1 = [], stack2 = [];
    let p1 = l1, p2 = l2;
    while (p1) {
        stack1.push(p1.val);
        p1 = p1.next;
    }
    while (p2) {
        stack2.push(p2.val);
        p2 = p2.next;
    }
    let dummy = new ListNode(-1);
    let p = dummy;
    let carry = 0;
    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
        let val = carry;
        if (stack1.length > 0) {
            val += stack1.pop();
        }
        if (stack2.length > 0) {
            val += stack2.pop();
        }
        carry = Math.floor(val / 10);
        let newNode = new ListNode(val % 10);
        newNode.next = p.next;
        p.next = newNode;
    }

    // while (stack3.length > 0) {
    //     p.next = new ListNode(stack3.pop());
    //     p = p.next;
    // }
    return dummy.next;  
};