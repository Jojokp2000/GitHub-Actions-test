const sum = require('src/sum.js');

test('Sum two numbers', async () => {
    const result = await sum(4,6);
    expect(result).toBe(10);
})