const express = require('express');

const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
    res.sendStatus(404);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})