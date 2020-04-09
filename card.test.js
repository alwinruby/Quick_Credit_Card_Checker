const validate = require('./card');

test('VISA: 4111111111111111 (valid)', () => {
  expect(validate(4111111111111111)).toEqual('VISA');
});

test('Unkown: 22222222 (invalid)', () => {
  expect(validate(22222222)).toEqual('Unknown');
});
