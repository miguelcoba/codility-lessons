function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    
    var n = A.length,
        bitmap = Array.apply(null, Array(n)).map(Number.prototype.valueOf,0); // initialize array with 0
        
    for(var i=0; i<n; i++) {
        if (A[i] > n) return 0; // values out of range mean that is not a permutation
        bitmap[A[i] - 1 ] = 1;
    }
    
    // console.log('bitmap: ', bitmap);
    
    return bitmap.every(function(el) { return el === 1 }) ? 1 : 0;
}