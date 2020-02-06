// Ejercio 4
// Pablo López Veleiro

function pluck2(objects, fieldName) {
    let sol = [];
    objects.forEach((e,i,a) => {
        sol[i] = e[fieldName]
    });
    return sol;
}

function partition2(array, p) {

}

function groupBy2(array, f) {
    return array.filter(f);
}

function where2(array, modelo) {
    return array.filter(modelo);
}