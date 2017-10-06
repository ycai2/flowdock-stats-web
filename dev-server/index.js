const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  fs.readFile(path.resolve(__dirname, './mock-data/users.json'), (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.type('json');
    res.status(200).send(data);
  });
});

app.listen(8001, () => {
  console.log('Dev server listening on port 8001!')
});