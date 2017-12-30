const express = require('express');
const app = express();
const VER = process.env;

const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.status(200).send(VER);
});

app.listen(PORT, HOST);
console.log(`Hello. Running on http://${HOST}:${PORT}`);
