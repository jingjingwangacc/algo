var mergeKLists = function (lists) {
    let dummy = new ListNode(-1);
    let p = dummy;
    // priority queue
    let pq = new MinPriorityQueue((node) => node.val);
    for (let list of lists) {
        if (list) {
            pq.enqueue(list);
        }
    }
    while (!pq.isEmpty()) {
	    let node = pq.dequeue();
        p.next = node;
        if (node.next !== null) {
            pq.enqueue(node.next);
        }
        p = p.next;
    }
    return dummy.next;
}