const core = require('@actions/core');
const fetch = require('node-fetch')

const url = 'https://3667-192-38-10-18.ngrok.io';

let seconds = 0;

const interval = setInterval(() => {

    fetch(url)
    .then(response => response.status)
    .then(status => {
        if (status === 200) {
            clearInterval(interval);
        }
    })

    console.log(seconds + ' seconds');
    seconds++;

}, 1000)