"use strict";
const http = require("http");
const mysql = require("mysql");
const url = require("url");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    pass: "",
    database: "db",
});

const servidor = http.createServer(function (request, response) {
    const method = request.method;
    const urlP = url.parse(request.url, true);
    const pathname = urlP.pathname;
    const query = urlP.query;

    if (method === "GET" && pathname === "/index.html") {
        formulario(response);
    } else if (method === "GET" && pathname === "/nuevo_usuario") {
        consultaBD(query, function(err) {
            if (err) {
                response.statusCode = 500; // Internal Server Error
                console.error(err);
            } else {
                response.statusCode = 200;
            }
        });
    } else if (method === "GET" && pathname === "/index.css") {
        css(response);
    } else {
        response.statusCode = 404;
    }
});

servidor.listen(8080, function (err) {
    if(err){
        console.log("Error al abrir el puerto: " + err);
    } else {
        console.log("Servidor escuchando en el puerto 8080");
    }
});

function consultaBD(datos, callback) {
    pool.getConnection(function (err, conexion) {
        if (err) {
            callback(err);
        } else {
            conexion.query("INSERT INTO USUARIOS (Nombre, Telefono, Correo) VALUES (?,?,?)", [datos.nombre, datos.telefono, datos.correo],
                function (err) {
                    conexion.release();
                    if (err) {
                        callback(err);
                    } else {
                        callback(null);
                    }
                });
        }
    });
}

function formulario(response) {
    response.setHeader("Content-Type", "text/html");
    response.write('<html>');
    response.write('<head>');
    response.write('<title>Ejercicio 5</title>');
    response.write('<meta charset="UTF-8">');
    response.write('<link rel="stylesheet" href="index.css">');
    response.write('</head>');
    response.write('<body>');
    response.write('<form method="GET" action="/nuevo_usuario">');
    response.write('<div>Nombre:</div>');
    response.write('<div>');
    response.write('<input type="text" name="nombre">');
    response.write('</div>');
    response.write('<div>Correo:</div>');
    response.write('<div>');
    response.write('<input type="text" name="correo">');
    response.write('</div>');
    response.write('<div>Telefono:</div>');
    response.write('<div>');
    response.write('<input type="text" name="telefono">');
    response.write('</div>');
    response.write('<div></div>');
    response.write('<div>');
    response.write('<input type="submit" value="Enviar">');
    response.write('</div>');
    response.write('</form>');
    response.write('</body>');
    response.write('</html>');
    response.end();
}

function css(response) {
    response.setHeader('Content-type', 'text/css');
    response.write('form {');
    response.write('display: grid;');
    response.write('grid-template-columns: auto 1fr;');
    response.write('}');
    response.write('form > div {');
    response.write('padding: 10px;');
    response.write('}');
    response.end();
}