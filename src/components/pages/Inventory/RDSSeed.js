
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const hostname = process.env.REACT_APP_RDS_HOSTNAME;
const username = process.env.REACT_APP_RDS_USERNAME;
const pass = process.env.REACT_APP_RDS_PASS;



const connection = mysql.createConnection({
    host: hostname,
    user: username,
    password: pass
});

module.exports = connection;

const express = require('express');
const app = express.Router();


app.post('/inventory', (req, res) => {
    console.log("hello");
    const values = req.body.items
    connection.query("INSERT INTO ITE (ITEMA, ITEMB, ITEMC, ITEMD, ITEME, ITEMF, ITEMG, ITEMH) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", values, function(err, result, fields) {
        if (err) res.send(err);
            res.send(result);
        })
    connection.end();
});

module.exports = app;