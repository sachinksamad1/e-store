const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 5001;

const pool = mysql.createPool(
    {
        host: "localhost",
        user: "db_username",
        password: "db_password",
        database: "estore",
        port: 3306,
        multipleStatements: true,
    },
);

app.get("/", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).send(err);
        } else {
            pool.query("select * from categories", (error,
                categories) =>{
                    if (error) res.status(500).send(error);
                    res.status(200).send(categories);
                });
        }
    });
});

const server = app.listen(5001, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});