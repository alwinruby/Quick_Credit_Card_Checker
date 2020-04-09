const validate = require('./card');

test('VISA: 4111111111111111 (valid)', () => {
  expect(validate(4111111111111111)).toEqual('VISA');
});

test('Unkown: 22222222 (invalid)', () => {
  expect(validate(22222222)).toEqual('Unknown');
});

test('Discover: 6011111111111117 (valid)', () => {
  expect(validate(6011111111111117)).toEqual('Discover');
});

test('Mastercard: 5105105105105100 (valid)', () => {
  expect(validate(5105105105105100)).toEqual('Mastercard');
});

test('AMEX: 378282246310005 (valid)', () => {
  expect(validate(378282246310005)).toEqual('AMEX');
});
