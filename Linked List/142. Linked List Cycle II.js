var detectCycle = function(head) {
    // find if there is a cycle
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    if (fast === null || fast.next === null) return null;
    // let slow to be head again
    slow = head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;   
};