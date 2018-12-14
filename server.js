'use strict';

const express = require('express');
var os = require('os');
var dns = require('dns');

const app = express();

const PORT = 8080;

var hostAddress = "";
dns.lookup(os.hostname(), function(err, address, addressFamily) {
  hostAddress = address;
});

app.get('/', (req, res) => {
  var message = '<h1>Simple Node.JS App</h1>';
  message = message + ('<p>Hostname: ' + os.hostname());
  message = message + ('<p>OS Platform: ' + os.platform());
  message = message + ('<p>IP Address: ' + hostAddress + '\n');
  res.send(message);
});

app.listen(PORT);
console.log(`Running on http://${hostAddress}:${PORT}`);