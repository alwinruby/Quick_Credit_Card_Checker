const card = require('./card');

test('dds 3 + 5 to equal 8', () => {
  expect(card(3, 5)).toBe(8);
});
