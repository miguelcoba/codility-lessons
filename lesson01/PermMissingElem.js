function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    
    var n = A.length + 1,
        actualSum = A.reduce(function(prev, cur) { return prev + cur }, 0),
        expectedSum = n * (n + 1) / 2; // sum of n first numbers, starting at 1
        
    return expectedSum - actualSum;
}