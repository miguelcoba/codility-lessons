// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    N = 100001
    var bitmap = Array(N).fill(false);
    for (var i = 0; i < A.length; i ++) {
        if (A[i] > 0 && A[i] <= N) {
            bitmap[A[i]] = true;
        }
    }
    
    for(var j = 1; j <= N; j++) {
        if (!bitmap[j]) {
            return j;
        }
    }
    
    return N + 1;
}
