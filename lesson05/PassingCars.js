function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    var n = A.length,
        count = 0,
        passedCars = 0;
        
    for(var i=0; i<n; i++) {
        if (A[i] == 0) {
            passedCars++;
        } else if (A[i] == 1) {
            count += passedCars;
        }
        if (count > 1000000000) return -1;
    }
    
    return count;
}