var kSmallestPairs = function(nums1, nums2, k) {
    // time: O(k * log(n)), n is nums1.length; space: O(log(n))
    // min heap
    // [1, 2] -> [1, 4] -> [1, 6]
    // [7, 2] -> [7, 4] -> [7, 6]
    // [11, 2] -> [11, 4] -> [11, 6]
    let res = [];
    let pq = new MinPriorityQueue(a => a[2]);
    // n element in pq O(log(n))
    for (let i = 0; i < nums1.length; i++) {
        pq.enqueue([i, 0, nums1[i] + nums2[0]]);
    }  

    while (!pq.isEmpty() && k > 0) {
        let cur = pq.dequeue();
        let i = cur[0], j = cur[1];
        res.push([nums1[i], nums2[j]]);
        k--;
        if (j + 1 < nums2.length) {
            pq.enqueue([i, j + 1, nums1[i] + nums2[j + 1]]);
        }
    }
    return res;    
};