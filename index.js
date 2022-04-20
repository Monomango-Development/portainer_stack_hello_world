const express = require('express');

const port = process.env.PORT || 8000

const app = express();

app.get('/', function (req, res) {
  res.send('This is running in a container. And now it got updated!!!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});