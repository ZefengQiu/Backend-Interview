const routes = require('./routes/index.js');
const express = require('express');
const bodayParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello theScore!')
});

app.listen(8080, () => {
  console.log('Example app for theScore listening on port 8080!')
});

app.use(bodayParser.json());

routes(app);