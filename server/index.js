const routes = require('./routes/index.js');
const express = require('express');
const bodayParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8080, () => {
  console.log('Sample app for Top hat listening on port 8080!')
});

app.use(bodayParser.json());

routes(app);