const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

require('dotenv').config()
//console.log(process.env) // remove this after you've confirmed it working
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'dev-mysqldb',
  user: 'mysqluser',
  password: 'process.env.PASSWORD',
  database: 'hello_world'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all products
app.get('/',(req, res) => {
  let sql = "SELECT * FROM messages";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
//    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    res.send(results);
  });
});
  
//Server listening
app.listen(80,() =>{
  console.log('Server started on port 80...');
});
