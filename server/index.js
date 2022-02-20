const routes = require('./routes/index.js');
const config = require('./config/index.js');
const express = require('express');
const bodayParser = require('body-parser');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json("healthy");
});

app.listen(8080, () => {
  console.log('Sample app listening on port:' + config.port)
});

app.use(bodayParser.json());

routes(app);