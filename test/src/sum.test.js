const sum = require('src/sum.js');

test('Sum two numbers', async () => {
    const result = await sum(3,4);
    expect(result).toBe(7009);
})
