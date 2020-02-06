"use strict";

const fs = require("fs");

/*
fs.readFile("File.txt", { encoding: "utf-8" }, function(err, content) {
        if (err != null) {
            console.log("Se ha producido un error: ");
            console.log(err.message);
        } else {
            console.log("Fichero leído correctamente:");
            console.log(content);
        }
    }
);*/

//console.log(__filename);
//console.log(__dirname);

fs.readFile("File.txt", { encoding: "utf-8" }, function(err, content) {
        if (err == null) {
            content = content.replace(/ +/g, " ");
            fs.writeFile("File.txt", content, function (err, content){
                if (err != null)
                    console.log("Error en la escritura");
            });
        }
    }
);