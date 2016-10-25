function solution(N, A) {
    // write your code in JavaScript (Node.js 0.12)
    
    var m = A.length,
        counters = Array.apply(null, Array(N)).map(Number.prototype.valueOf,0); // initialize array with 0
    
    var maxValue = 0,
        lastUpdate = 0;
    for(var k=0; k<m; k++) {
        if (A[k] <= N) {
            if (counters[A[k]-1] < lastUpdate) {
                counters[A[k]-1] = lastUpdate + 1;
            } else {
                counters[A[k]-1]++;
            }
            
            if (counters[A[k]-1] > maxValue) maxValue = counters[A[k]-1];
        } else {
            lastUpdate = maxValue;
        }
    }
    
    for(var j=0; j<N; j++) {
        if (counters[j] < lastUpdate) {
            counters[j] = lastUpdate;
        }
    }
    
    return counters;
}