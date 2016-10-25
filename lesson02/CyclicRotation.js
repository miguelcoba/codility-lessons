// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)

    var length = A.length;

    var result = [];

    for (var i = 0; i < length; i ++) {
        result [(i + K) % length] = A[i];
    }

    return result;
}
