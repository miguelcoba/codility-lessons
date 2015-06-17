function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    
    var sorted = A.sort(function(a, b) {
        return a - b;
    });
    
    var n = sorted.length,
        currentMin = 1;
    for (var i=0; i<n; i++) {
        if (n > 0 && sorted[i] == currentMin) {
            currentMin++;
        }
    }
    
    return currentMin;
}