const express = require('express');
const fs = require('fs');
const val = require('./whiteboxqaSQL.js');

const app = express();

app.set('view engine', 'pug');
app.get('/',async (req,res)=>{
    res.render('index', await val)

}).listen(3000);
// setTimeout(function(){
//     console.log('students:',val);
// },3000);