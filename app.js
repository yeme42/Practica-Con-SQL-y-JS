const dontenv = require('dotenv');
const express = require('express');
const app = express();

dontenv.config();

const heroes = require('./routes/heroes.js');
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json






app.use("/heroes", heroes);


const port = process.env.port || 3200;
app.listen(port, () => console.log(`escuchando en puerto ${port}...`));