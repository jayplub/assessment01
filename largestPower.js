function largestPower(n) {

    if (n === 1) return [0, -1];
    if (n <= 4) return [1, -1];
    
    var res = [];
    for (let a = 2; a * a < n; a ++) {
      for (let b = 2; a ** b < n; b++) {
        res.push(a ** b);
      }
    }
    // console.log(sum)
    var x = Math.max(...res);
    var y = res.filter(item => item === x).length;
    // console.log(n, x, y)
    return [x, y];

}
module.exports = largestPower;