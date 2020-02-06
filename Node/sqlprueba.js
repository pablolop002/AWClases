const mysql = require("mysql");

const pool = mysql.createPool({ host: "localhost", user: "root", password: "", database: "articulos"});

/*pool.getConnection(function(err, connection) {
    if (err) {
        console.log(`Error al obtener la conexión: ${err.message}`);
    }
    else {
        connection.query("SELECT Nombre, Apellidos FROM Contactos", function(err, filas) {
            connection.release();
            pool.end();
                if (err) {
                    console.log('Error al realizar la consulta');
                } else {
                    filas.forEach(function(fila) {
                        console.log(`${fila.Nombre} ${fila.Apellidos}`);
                    });
                }
        });
    }
});*/

function leerArticulos(callback) {
    let error = null, datos = [];
    pool.getConnection(function(err, connection) {
        if (err) {
            error = err;
        }
        else {
            connection.query("SELECT id, titulo, fecha FROM articulos", function(err, filas) {
                if (err) {
                    error = err;
                    callback(error, datos);
                } else {
                    filas.forEach(function(fila, index, array) {
                        connection.query("SELECT PalabraClave FROM palabrasclave where IdArticulo = ?", [fila.id], function (err, palabras){
                            if(err)
                                error = err;
                            else
                                filas[index].palabrasClave = palabras;
                        })
                    });
                    connection.release();
                    datos = filas;
                    callback(error, datos);
                }
            });
        }
    });
}

leerArticulos(function (error, datos) {
    console.log(error);
    console.log(datos);
})


