var  mysql = require('mysql');

var DatabaseConnectionConfig = {
    host : "localhost",
    user: "root",
    password: "",
    database: "node_school"
}

var con = mysql.createConnection(DatabaseConnectionConfig);
con.connect(function(error){
    if(error){
        console.log("Database Connection Failed");
    }
    else {
        console.log("Database Connection Success");
    }
});