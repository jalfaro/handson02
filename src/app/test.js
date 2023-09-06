const conn = require("../config/database");
module.exports = (app) => {

    app.get("/nombre", (req, res) => {
        let query = "SELECT id, nombre FROM nombre";
        conn.query(query, (err, rows, fields) => { 
            if (err) {
                res.json({status: 0, message: "Error al obtener los nombres"})
            } else {
                res.json(rows);
            }
        });
    });
    app.get("/test", (req, res) => {
        res.json({saludo: "Hola Mundo"});
    });

}