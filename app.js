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

const mongoURI = 'mongodb+srv://khedejitisha2004:Shubhiatlas@cluster0.txi4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
try{
    mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=>{
        console.log('mongoDB connected');
    })
}catch(e){
    console.log(e);
}