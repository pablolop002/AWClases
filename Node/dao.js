"use strict";

const mysql = require("mysql");

class dao {
    pool;
    constructor(host, user, pass, db){
        this.pool = mysql.createPool({
            host: host,
            user: user,
            pass: pass,
            database: db,
        });
    }

    insertarUsuario(usuario, callback){
        this.pool.getConnection(function (err, connection) {
            let error = null;
            if(err)
                error = err;
            else {
                connection.query('INSERT INTO usuarios (nombre, correo, telefono) VALUES (?, ?, ?)',
                    [usuario.nombre, usuario.correo, usuario.telefono], function (err, resultado) {
                    connection.release();
                    if(err)
                        error = err;
                    else {
                        usuario.id = resultado.insertId;
                    }
                })
            }
            callback(error);
        });
    }

    enviarMensaje(usuarioOrigen, usuarioDestino, mensaje, callback){
        this.pool.getConnection(function (err, connection) {
            let error = null;
            if(err)
                error = err;
            else {
                connection.query('INSERT INTO mensajes (idOrigen, idDestino, mensaje, hora, leido) VALUES (?, ?, ?, current_timestamp(), false)',
                    [usuarioOrigen.id, usuarioDestino.id, mensaje], function (err) {
                        connection.release();
                        if(err)
                            error = err;
                    })
            }
            callback(error);
        });
    }

    bandejaEntrada(usuario, callback) {
        this.pool.getConnection(function (err, connection) {
            let error = null, result = [];
            if(err)
                error = err;
            else {
                connection.query('SELECT a.nombre, b.mensaje, b.hora from mensajes as b LEFT JOIN usuarios AS a ON b.idOrigen = a.id where idDestino = ? and leido = false',
                    [usuario.id], function (err, resultado) {
                        connection.release();
                        if(err)
                            error = err;
                        else {
                            result = resultado;
                        }
                    })
            }
            callback(error, result);
        });
    }
}

module.exports = dao;