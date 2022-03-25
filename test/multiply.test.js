const multiply = require('../src/multiply');

test('Multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
})