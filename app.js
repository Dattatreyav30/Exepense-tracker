const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const cors = require('cors');

const indexRoutes = require('./routes/indexRoutes');

app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(indexRoutes);

app.listen(3000);

