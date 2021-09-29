/*
  mongodb+srv://etofanim:<password>@cluster0.ebemi.mongodb.net/test
*/

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://etofanim:CEalB9NCxX3IgYk9@cluster0.ebemi.mongodb.net/test');

app.use(express.json());
app.use(routes);
app.listen(3333);
