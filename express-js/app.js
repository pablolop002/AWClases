"use strict";

const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "public", "bienvenido.html"));
});

var usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];

app.get("/users.html", function(request, response) { response.status(200);
    response.render("users", { users: usuarios });
});

app.get("/usuarios.html", function (request, response) {
    response.redirect("/users.html");
});

app.listen(3000, function(err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000" + timestamp);
    }
});

app.use(function(request, response, next) {
    console.log(`Recibida petición ${request.method} ` + `en ${request.url} de ${request.ip}`);
    next();
});