var partition = function(head, x) {
    // find the first nodes >= x.val before x
    // find all nodes < x.val, use a dummy node to connect
    if (head === null) return null;
    let dummy1 = new ListNode(-1);
    let big = dummy1;
    let dummy2 = new ListNode(-2);
    let small = dummy2;
    let cur = head;
    while (cur) {  
        if (cur.val >= x) {
            dummy1.next = cur;
            dummy1 = dummy1.next;
        } else {
            dummy2.next = cur;
            dummy2 = dummy2.next;
        }
        cur = cur.next;
        dummy1.next = null;
        dummy2.next = null;
    }
    
    dummy2.next = big.next;
    return small.next; 
};