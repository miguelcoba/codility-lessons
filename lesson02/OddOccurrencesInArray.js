// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    var map = {};

    for(var i = 0; i < A.length; i++) {
        var value = A[i];
        if (map[value] === undefined) {
            map[value] = 1;
        } else {
            map[value]++;
        }
    }
    for (var k in map) {
        if (map[k] % 2 === 1) {
            return parseInt(k);
        }
    }
}
