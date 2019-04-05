const express = require ('express');
const mongoose = require('mongoose');
const requireDir =require('require-dir');

//inicia app
const app = express();

//connect DB
// mongoose.connect('mongo://user@password')
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true});


requireDir('./src/models');



//first route
//use aceita todo tipo de requisição

app.use('/api', require('./src/routes'));

app.listen(3000);


//npm run dev
// executa script do package.json