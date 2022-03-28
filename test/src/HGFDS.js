const sum = require('src/HGFDS.js');

test('Sum two numbers', async () => {
    const result = await sum(0,9);
    expect(result).toBe(43);
})
