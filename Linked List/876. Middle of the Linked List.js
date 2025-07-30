var middleNode = function(head) {
    // fast and slow pointer, fast go 2 steps, slow go 1 step
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;   
};