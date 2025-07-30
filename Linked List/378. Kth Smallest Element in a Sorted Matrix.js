var kthSmallest = function(matrix, k) {
    //time: k*log(m), space: log(m)
    // minPriority Queue
    let pq = new MinPriorityQueue(a => a[0]);
    let m = matrix.length;
    let n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        pq.enqueue([matrix[i][0], i, 0]);
    }

    let res = -1;
    while (!pq.isEmpty() && k > 0) {
        let cur = pq.dequeue();
        res  = cur[0];
        k--;
        let i = cur[1], j = cur[2];
        if (j + 1 < n) {
            pq.enqueue([matrix[i][j + 1], i, j + 1]);
        }
    }
    return res;
};