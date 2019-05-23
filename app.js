const express = require('express');//insert package into program and store it in express var.
const app = express(); //creates an express app.
const ejs = require('ejs');
const PORT = 3000;
app.get('/homeworkjs', (req, res) => res.send('This is my CodeSquad homework!'))
app.set('view engine', 'ejs');//allows us to pass var. to ejs
app.listen(PORT, () => console.log(`Homework app listening on port 3000 ${PORT}!`))

   




   //  res.send('<h1> This is my CodeSquad homework.</h1>');

   
 

