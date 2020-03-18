const sql = require("mysql");
const fs = require('fs');


const con = sql.createConnection({
  host: "mysql.whiteboxqa.com",
  user: "whiteboxqa",
  password: "Innovapath1",
  database: "whiteboxqa"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("select c.name, cm.currentlocation, cm.relocation, cm.intro from candidatemarketing cm, candidate c where cm.candidateid = c.candidateid and cm.`status` = '0-InProgress' and cm.priority ='P1'  and c.`status` in ('Marketing', 'Placed-Mkt') and LENGTH(cm.priority) > 0 and cm.relocation in ('Y','N') order by cm.priority desc LIMIT 5", function(
    err,
    result,
    fields
  ) {
    if(!err){
      fs.writeFile('candidates.json',JSON.stringify(result),(er,data)=>{
        if(er){
            console.log(er);
        }
        else{
            console.log(result);
        }
      })  
    }
    else{
        console.log(err);
    }
  });
});
