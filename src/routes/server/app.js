const express = require('express');

const app = express();

app.use(express.json());

//public
require('../routes/authenticate')(app)
//middleware
require('../routes/professor')(app)
require('../routes/category')(app)

module.exports = app;