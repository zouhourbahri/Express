const express = require('express'); // pour importer express
const path=require('path');
const checktiming = require('./middlewares/checktiming');
const app = express(); // initialisation de express
const port = 4000;


app.use(checktiming);
app.use(express.json());

//static folder
app.use(express.static(path.join(__dirname,'Public')));
console.log(path.join(__dirname,'Public'));

app.listen(port, (err)=>{
  err? console.log(err) :
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});
