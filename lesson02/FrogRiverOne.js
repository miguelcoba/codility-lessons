function solution(X, A) {
    // write your code in JavaScript (Node.js 0.12)

    
    var n = A.length,
        jumpsRemaining = X,
        counts = Array.apply(null, Array(n+1)).map(Number.prototype.valueOf,0); // initialize array with 0
        
    for(var i=0; i<n; i++) {
        if (!counts[A[i]]) {
            counts[A[i]] += 1;
            jumpsRemaining--;
            if (!jumpsRemaining) return i;
        }
    }
    
    return -1;
}