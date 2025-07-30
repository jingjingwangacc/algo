var reverseList = function(head) {
    // let dummy = new ListNode(-1);
    let p = null, p1 = head;
    //let prev = null;
    while (p1) {
        let nextNode = p1.next;
        p1.next = p;
        p = p1;
        p1 = nextNode; 
    }
    return p;
};