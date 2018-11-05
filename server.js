const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Set up mongoose connection

const  dev_db_url = 'mongodb://localhost:27017/tutorial';
mongoose.connect(dev_db_url)
.then(() => {
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log('failed to connect to mongodb', err);
});
app.listen(3030, () => console.log(`Example app listening on port ${3030}!`));