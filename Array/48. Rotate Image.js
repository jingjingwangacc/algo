var rotate = function(matrix) {
    // 先镜像，再每行reverse
    // mirror the matrix
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    //console.log(matrix);
    matrix.forEach(row => reverse(row));

    function reverse(arr) {
        let l = 0, r = arr.length - 1;
        while (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }
};