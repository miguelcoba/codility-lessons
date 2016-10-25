function solution(A, B, K) {
    // write your code in JavaScript (Node.js 0.12)
    
    var res;
    if (A % K === 0) {
        res = (B - A) / K + 1;
    } else {
        res = (B - (A - A % K)) / K;
    }
    
    return Math.floor(res);
}