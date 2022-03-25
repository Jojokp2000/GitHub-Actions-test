const sum = require('../src/lib/sum');

test('Sum two numbers', () => {
    expect(sum(2, 3)).toBe(5);
})