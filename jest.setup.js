// Polyfill para fetch em ambiente Node.js
const fetch = require('node-fetch');
global.fetch = fetch;