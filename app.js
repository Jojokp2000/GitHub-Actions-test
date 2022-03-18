const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('GET response');
    console.log('GET received');
})

app.post('/', (req, res) => {
    res.send('POST response');
    console.log(req.body);
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
})
