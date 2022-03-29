const core = require('@actions/core');
const fetch = require('node-fetch');

const url = 'https://cc3a-130-225-198-131.ngrok.io/test';

let seconds = 0;

const interval = setInterval(() => {

    fetch(url)
    .then(response => response.status)
    .then(status => {
        console.log(status);
        if (status === 200) {
            clearInterval(interval);
        }
    })

    console.log(seconds + ' seconds');
    seconds++;

}, 1000)