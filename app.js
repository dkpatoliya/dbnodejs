const express = require('express');
const app = express();
const port = 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',require('./routes/index'));


app.listen(port,(req,res) => {
    console.log(`App listening at http://localhost:${port}`);
});