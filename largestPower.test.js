const largestPower = require('./largestPower');

test('90 will reuturn x:81 y:2', () => {
  expect(largestPower(90)).toEqual([81,2]);
});

test('6 will reuturn x:4 y:1', () => {
  expect(largestPower(6)).toEqual([4, 1]);
});


test('65 will reuturn x:64 y:3', () => {
  expect(largestPower(65)).toEqual([64, 3]);
});

test('3 will reuturn x:1 y:-1', () => {
  expect(largestPower(3)).toEqual([1, -1]);
});

test('1 will reuturn x:0 y:-1', () => {
  expect(largestPower(1)).toEqual([0, -1]);
});

test('6 will reuturn x:4 y:1', () => {
  expect(largestPower(6)).toEqual([4, 1]);
});

test('81 will reuturn x:64 y:3', () => {
  expect(largestPower(81)).toEqual([64, 3]);
});

test('29 will reuturn x:27 y:1', () => {
  expect(largestPower(29)).toEqual([27, 1]);
});

test('4 will reuturn x:1 y:-1', () => {
  expect(largestPower(4)).toEqual([1, -1]);
});