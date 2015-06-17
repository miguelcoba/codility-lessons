function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    
    var n = A.length;
    var sum = A.reduce(function(prev, cur) { return prev + cur }, 0);
    
    var sumLeft = A[0],
        currentMin;
    for (var p = 1; p < n; p++) {
        var sumRight = sum - sumLeft;
        var diff = Math.abs(sumLeft - sumRight);
        if (currentMin === undefined || (diff < currentMin)) {
            currentMin = diff;
        }
        sumLeft += A[p];
    }
    
    return currentMin;
}