const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Abc12345",
    database: "test"
});

conn.connect(err => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("conectado a servicdor de DB");
    }
});

module.exports = conn;