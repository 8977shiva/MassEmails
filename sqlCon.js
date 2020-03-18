const sql = require('mysql');

const con = sql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "password",
    "database":'sakila'
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM actor", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });