"use strict";

const fs = require("fs");

/*freplace("fichero1.txt",/[0-9]+/g, "{numero}", callback);
fs.readFile("File.txt", { encoding: "utf-8" }, function(err, content) {
        if (err == null) {
            content = content.replace(/ +/g, " ");
            fs.writeFile("File.txt", content, function (err, content){
                if (err != null)
                    console.log("Error en la escritura");
            });
        }
    }
);*/

function freplace(fichero, buscar, sustituir, callback){
    fs.readFile(fichero, { encoding: "utf-8" }, function (err, content) {
        let error;
        if(err == null){
            content = content.replace(buscar, sustituir);
            fs.writeFile(fichero, content, function (err){
                error = err;
            });
        } else {
            error = err;
        }
        callback(error);
    });
}

function callback(err){
    console.log(err);
}

module.exports = {freplace: freplace};