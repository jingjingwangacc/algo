var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1);
    let p = dummy;
    let q = head;
    while (q !== null) {
        //console.log(p.val);
        if (q.next !== null && q.val === q.next.val) {
            while (q.next !== null && q.val === q.next.val) {
                q = q.next;
            }
            q = q.next;
            // if (q === null) {
            //     p.next = null;
            // }
        } else {
            p.next = q;
            p = p.next
            q = q.next;
        }
    }
    p.next = null;
    return dummy.next;
};