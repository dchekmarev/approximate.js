"use strict;"

module.exports = {
  simple: function(xs, func) {
    var ys = xs.map((x) => func(x));
    return (x) => {
      for (var i = 1; i < xs.length; i++) {
        if (x <= xs[i]) {
          var x0 = xs[i - 1],
              x1 = xs[i],
              y0 = ys[i - 1],
              y1 = ys[i];
          return y0 + (y1 - y0) / (x1 - x0) * (x - x0);
        }
      }
    }
  }
}
