const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Gursha Library!');
});

app.listen(port, () => {
  console.log(`Gursha Library server running at http://localhost:3000`);
});
