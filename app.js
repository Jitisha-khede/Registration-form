const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');

const PORT = 8001;

require('dotenv').config();

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: false }));
//app.set('views',path.resolve('./views'));
app.use('',require('./routes/router'));
app.use(express.urlencoded({extended:false}));

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/registration-form-data').then(()=>{
    console.log('DB connected');
});
