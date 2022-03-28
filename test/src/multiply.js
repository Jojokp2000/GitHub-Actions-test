const multiply = require('src/multiply.js');

test('Multiply two numbers', async () => {
    const result = await multiply(2,3);
    expect(result).toBe(6);
})
