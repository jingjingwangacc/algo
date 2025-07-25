var reverseKGroup = function (head, k) {
    // find k nodes
    // function to reverse the nodes
    // link all nodes
    // l -> r -> l -> r ->l -> r
    // r -> l + r -> l + r -> l 
    // if remain nodes less than k, not reverse
    let dummy = new ListNode(-1);
    let tail = dummy, p1 = head;
    
    let count = 0;
    while (p1) {
        count++;
        p1 = p1.next;
    }
    let round = Math.floor(count / k);
    p1 = head;
    
    for (let i = 0; i < round; i++) {
        let section = reverseList(p1, k);
        let newHead = section[0];
        let newTail = section[1];
        // console.log(newHead.val, newTail.val);
        p1 = section[2];
        tail.next = newHead;
        tail = newTail;
    }

    tail.next = p1;
    return dummy.next;

    // Returns [newhead, newtail, next]
    function reverseList(h, k) {
        let prev = h;
        let cur = h.next;
        let next;
        while (k - 1 > 0) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
            k--;
        }
        return [prev, h, cur];
    }

};