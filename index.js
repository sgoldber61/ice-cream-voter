// environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to database
mongoose.connect(process.env.MONGO_URL);

// create express server and apply middleware
const app = express();
app.use(bodyParser.json());

// create server routes here
const router = require('./router');
router(app);

const port = 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

