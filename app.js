const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.get('/homeworkjs', (req, res) => res.send('This is my CodeSquad homework!'));

app.listen(PORT, () => console.log(`Homework app listening on port ${PORT}!`));

