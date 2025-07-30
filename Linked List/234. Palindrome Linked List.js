var isPalindrome1 = function(head) {
    // copy into array, O(n) time and space complexity
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    let l = 0, r = arr.length - 1;
    while (l < r) {
        if (arr[l] !== arr[r]) {
            return false;
        } else {
            l++;
            r--;
        }
    }
    return true;
    
};

var isPalindrome2 = function(head) {
    // 后序遍历
    // O(n) time and space
    let left = head, right = head;
    let res = true;
    traverse(right);
    function traverse(head) {
        if (head === null) {
            return;
        }
        traverse(head.next);

        if (left.val !== head.val) {
            res = false;
        }
        left = left.next;
    }
    return res;
}

var isPalindrome = function(head) {
    // time: O(n), space: O(1)
    // find the middle point of the linkedlist use fast and slow pointer
    let fast = head, slow = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse the list from the slow pointer
    let left = head;
    let right = reverse(slow);
    // compare the l and r pointer
    while (right !== null) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;

    function reverse(p) {
        let prev = null, cur = p;
        while (cur) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
}