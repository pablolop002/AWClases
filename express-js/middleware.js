"use strict";

const path = require("path");
const express = require("express");

let usuarios = [{
    nombre: "Carmen San Juan",
    numero: 8976
}, {
    nombre: "Adrian Lucas",
    numero: 8977
}, {
    nombre: "Natalia Rodriguez",
    numero: 8978
}];

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

app.get("/usuarios", function (req, resp) {
    resp.status(200);
    resp.render("usuarios", {users: usuarios});
});

app.get("/users", function (req, resp) {
    resp.status(200);
    resp.render("usuarios", {users: usuarios});
});

app.get("/socios", function (req, resp) {
    resp.status(200);
    resp.render("usuarios", {users: usuarios});
});

app.use(function (request, response, next) {
    response.status(404);
    response.render("error", {url: request.url});
});

app.use(function (error, request, response, next) {
    response.status(500);
    response.render("error500", {mensaje: error.message, pila: error.stack});
});

app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});