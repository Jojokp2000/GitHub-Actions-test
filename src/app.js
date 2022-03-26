const express = require('express');

const app = express();
const PORT = 3000;

let counter = 0;

app.get('/test', (req, res) => {

    if (counter < 40) {
        res.sendStatus(404);
    } else {
        res.sendStatus(200)
    }

    counter++;
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})