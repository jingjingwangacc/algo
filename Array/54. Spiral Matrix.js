var spiralOrder = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let startX = 0, startY = 0;
    let endX = m - 1, endY = n - 1;
    let res = [];
    while (res.length < m * n) {
        // right
        if (startX <= endX) {
            for (let y = startY; y <= endY; y++) {
                res.push(matrix[startX][y]);
            }
            startX++;
        }
        // down
        if (startY <= endY) {
            for (let x = startX; x <= endX; x++) {
                res.push(matrix[x][endY]);
            }
            endY--;
        }
        // left
        if (startX <= endX) {
            for (let y = endY; y >= startY; y--) {
                res.push(matrix[endX][y]);
            }
            endX--;
        }
        // up
        if (startY <= endY) {
            for (let x = endX; x >= startX; x--) {
                res.push(matrix[x][startY]);
            }
            startY++;
        }
    }
    return res;

};