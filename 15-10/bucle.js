function maplengths(array) {
    let sol = [];
    if(array instanceof Array){
        for(let i = 0; i < array.length; i++){
            sol[i] = array[i].length;
        }
    }
    return sol;
}

function filterInf(array) {
    let sol = [];
    if(array instanceof Array){
        let mitad = array.length / 2;
        for(let i = 0; i < mitad; i++) {
            sol[i] = array[i];
        }
    }
    return sol;
}

function everyFunction(array) {
    let sol = true, i = 0;
    if(array instanceof Array){
        while(i < array.length && sol){
            if(array[i] !== 'function'){
                sol = false;
            }
            i++;
        }
    }
    else {
        sol = false;
    }
    return sol;
}

function someUndefined(array) {
    let sol = false, i = 0;
    if(array instanceof Array){
        while(i < array.length && sol){
            if(array[i] === 'function'){
                sol = true;
            }
            i++;
        }
    }
    else {
        sol = false;
    }
    return sol;
}

function reduceSquare(array) {

}

function maplengths2(array) {
    let sol = [];
    if(array instanceof Array){
        for(let i = 0; i < array.length; i++){
            sol[i] = array[i].length;
        }
    }
    return sol;
}

function filterInf2(array) {
    let sol = [];
    if(array instanceof Array){
        sol = array.filter(function(v,i,a) {
            return i < a.length / 2;
        });
    }
    return sol;
}

function everyFunction2(array) {
    let sol = false;
    if(array instanceof Array){
        sol = array.every(f => typeof f === "function");
    }
    return sol;
}

// Ejercicio 4

function pluck2(objects, fieldName) {
    return objects.map(n => n[fieldName]).filter(n => typeof (n) != "undefined");
}

function partition2(array, p) {
    // return [array.filter(e => p(e)), array.filter(e => !p(e))];
    return array.reduce(((ac, v) => p(v) ? (ac[0].push(v)) : (ac[1].push(v))), [[],[]]);

    return array.reduce((ac, v) => {
        if(p(v))
            ac[0].push(v);
        else
            ac[1].push(v);
        return ac;
    }, [[],[]]);
}

function groupBy2(array, f) {
    return array.reduce((rv,x) => {
        if(rv[f(x)] === undefined)
            rv[f(x)] = [];
        rv[f(x)].push(x);
        return rv;
    });
}

function where2(array, modelo) {
    let aux = Object.entries(modelo);
    return array.filter(n => n[aux[0]] === aux[1]);
}

let personas = [
    {nombre: "Ricardo", edad: 63},
    {nombre: "Paco", edad: 55},
    {nombre: "Enrique", edad: 32},
    {nombre: "Adrián", edad: 34},
    {apellidos: "García", edad: 28},
];