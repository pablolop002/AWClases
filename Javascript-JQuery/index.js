$(function() {
    $("#añadirElemento").on("click", function() {
        let nuevoElemento = $("<li>Nuevo elemento</li>");
        $("#listaNumerada").append(nuevoElemento); });
});