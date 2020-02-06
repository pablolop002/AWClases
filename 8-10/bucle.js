//"use strict";

// --------------------------

function incrementar(x) {
    return x + 1;
}
function duplicar(x) {
    return 2 * x;
}
function cuadrado(y) {
    return y * y;
}
function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// -------------------------- Ejercicio 1

function producto(x, y){
    console.log(typeof(x) + " " + typeof(y));
    if (typeof(x) === "number" && typeof(y) === "number") {
        return x*y;
    }
    if (typeof(x) === "number" && y instanceof Array) {
        let a = [];
        for(let i=0; i<y.length;i++){
            a[i] = x*y[i];
        }
        return a;
    }
    if (x instanceof Array && typeof(y) === "number") {
        let a = [];
        for(let i=0; i<x.length;i++){
            a[i] = x[i]*y;
        }
        return a;
    }
    if (x instanceof Array && y instanceof Array && x.length == y.length) {
        let a = [];
        for(let i=0; i < x.length; i++){
            a[i] = x[i] * y[i];
        }
        return a;
    }
    throw "Error en la función. Formatos de valores de entrada no válidos";
}

function multiplicar(a, b = 1) {
    return a*b;
}
multiplicar(5); // 5
multiplicar(5,undefined); // 5


// -------------------------- Ejercicio 2

function suma(x) {
    return x+1;
}
function error(x) {
    return undefined;
}
function isArray(funcs) {
    if(!(funcs instanceof Array))
        return false;
    let f = true;
    let i = 0;
    while(f && i < funcs.length) {
        if (!(typeof(funcs[i]) === "function"))
            f = false;
    }
    return f;
}

function sequence1(f, x){
    for(let i = 0; i < f.length; i++)
        x = f[i](x);
    return x;
}

function sequence2(f, x){
    if (isArray(f) ) {
        let isUndefined = false, i = 0;
        while (i < f.length && !isUndefined) {
            x = f[i](x);
            if (x == null)
                isUndefined = true;
            i++;
        }
        return x;
    }
    else
        throw "Error";
}

function sequence3(f, x, right = false){
    if (isArray(f) ) {
        let isUndefined = false;
        if (right) {
            let i = f.length - 1;
            while (i >= 0 && !isUndefined) {
                x = f[i](x);
                if (x == null)
                    isUndefined = true;
                i++;
            }
        } else {
            x = sequence2(f, x);
        }
        return x;
    }
    else
        throw "Error";
}

// -------------------------- Ejercicio 3

function pluck(objects, fieldName) {
    let result = [];
    for (let i = 0; i < objects.length; i++){
        if(objects[i][fieldName] != null)
            result.push(objects[i][fieldName]);
    }
    return result;
}

function partition(array, p) {
    let result = [[],[]];
    for (let i of array){
        if(p(i))
            result[0].push(i);
        else
            result[1].push(i);
    }
    return result;
}

function groupBy(array, f) {
    let result = {};
    for (let i of array) {
        if(result[f(i)] === undefined)
            result[f(i)] = [];
        result[f(i)].push(i);
    }
    return result;
}

function where(array, modelo){
    let aux = modelo.entries, sol = [];
    for (let i of array){
        if(i[aux[0]] === aux[1]){
            sol.push(i);
        }
    }
    return sol;
}

let personas = [
    {nombre: "Ricardo", edad: 63},
    {nombre: "Paco", edad: 55},
    {nombre: "Enrique", edad: 32},
    {nombre: "Adrián", edad: 34},
    {apellidos: "García", edad: 28},
];

partition (personas, pers => pers.edad >= 60);