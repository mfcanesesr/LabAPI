const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ extended: true, limit: '50mb' }));

app.use('/alumnos', require('./routes/Alumnos.Router'));
//Routes
app.get('/', function(req, res) {
    res.send('Codes App running.');
});

module.exports = app;