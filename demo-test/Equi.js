function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    
    var n = A.length;
    if (n === 0) return -1;
    
    var sum = A.reduce(function(prev, curr) { return prev + curr }, 0);
    console.log("sum: ", sum);
    
    var sumLeft = 0;
    for (var k = 0; k < n; k++) {
        var sumRight = sum - sumLeft - A[k];
        if (sumLeft === sumRight) return k;
        sumLeft += A[k];
    }
    
    return -1;
}