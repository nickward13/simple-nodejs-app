'use strict';

const express = require('express');
var os = require('os');
var dns = require('dns');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  dns.lookup(os.hostname(), function (err, add, fam) {
    var message = '<h1>Hello world!</h1>';
    message = message + ('<p>Hostname: ' + os.hostname());
    message = message + ('<p>OS Platform: ' + os.platform());
    message = message + ('<p>IP Address: ' + add + '\n');
    res.send(message);
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);