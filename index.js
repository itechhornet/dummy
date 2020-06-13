const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: '162.241.225.135',
    user: 'itechhor_admin',
    password: 'nOmrZ2kY[m2N',
    database: 'itechhor_revive_test',
    port : 3306,
    multipleStatements: true
    });

    mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });
        //Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));   