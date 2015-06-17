function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 0.12)
    
    var partialJumps = (Y - X) / D;
    
    return Math.ceil(partialJumps);
}