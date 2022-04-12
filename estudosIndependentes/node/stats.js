const os = require('os');

const {freemem, totalmem} = os

console.log(parseInt(freemem() / 1024 / 1024), parseInt(totalmem() / 1024 / 1024));