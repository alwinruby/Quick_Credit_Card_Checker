const validate = require('./card');

test('dds 3 + 5 to equal 8', () => {
  expect(validate(3, 5)).toBe(8);
});
