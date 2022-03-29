const sum = require('src/sum.js');

test('Sum two numbers', async () => {
    const result = await sum(12,2);
    expect(result).toBe(3);
})
