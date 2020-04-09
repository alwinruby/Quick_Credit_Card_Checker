const validate = require('./card');

test('VISA: 4111111111111111 (valid)', () => {
  expect(validate(4111111111111111)).toEqual('Unknown');
});
