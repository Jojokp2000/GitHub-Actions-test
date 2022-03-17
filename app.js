const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('GET response');
    console.log('GET received');
})

app.post('/', (req, res) => {
    res.send('POST response');
    console.log('POST received');
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
})
