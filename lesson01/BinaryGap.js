function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var binaryString = (N >>> 0).toString(2)

    var zeroStrings = binaryString.split("1").filter(function (n) { return n }).sort(function (a, b) { return b.length - a.length});

    if (zeroStrings.length > 0) {
        return zeroStrings[0].length;
    }

    return 0;
}
