var removeNthFromEnd = function(head, n) {
    // 2 pointers to point : p1: head, p2: n + 1 steps;
    // when p2 is null, p1 is the prev node of the deleted node
    // p1.next = p1.next.next; O(n) time, O(1) space
    // use dummy
    let dummy = new ListNode(-1);
    dummy.next = head;
    let p2 = dummy;
    for (let i = 0; i < n + 1; i++) {
        p2 = p2.next;
    }
    let p1 = dummy;
    // run p1 and p2
    while (p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = p1.next.next;
    return dummy.next;

};