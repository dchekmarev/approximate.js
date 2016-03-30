const approximate = require('./index.js');
const test = require('tape');

test('test simple on Math.sin()', function(t) {
  var points = [];
  for (var i = -1; i <= 1; i += 0.2) {
    points.push(i);
  }
  const sin = approximate.simple(points, Math.sin);

  for (var i = -1; i <= 1; i += 0.05) {
    var orig = Math.sin(i);
    var approx = sin(i);
    var difference = orig - approx;
    t.equal(
      approx == orig || Math.abs(difference / orig * 100) < 1,
      true,
     'difference ' + approx + " <=> " + orig + ' less than 1%');
  }
  t.end();
})
