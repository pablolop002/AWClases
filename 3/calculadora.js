$(function () {
    let calculadora = [0,0,0], pos = 0;
    $('#uno').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("1");
        else
            result.text(result.text() + "1");
        calculadora[pos] += "1";
    });

    $('#dos').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("2");
        else
            result.text(result.text() + "2");
        calculadora[pos] += "2";
    });

    $('#tres').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("3");
        else
            result.text(result.text() + "3");
        calculadora[pos] += "3";
    });

    $('#cuatro').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("4");
        else
            result.text(result.text() + "4");
        calculadora[pos] += "4";
    });

    $('#cinco').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("5");
        else
            result.text(result.text() + "5");
        calculadora[pos] += "5";
    });

    $('#seis').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("6");
        else
            result.text(result.text() + "6");
        calculadora[pos] += "6";
    });

    $('#siete').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("7");
        else
            result.text(result.text() + "7");
        calculadora[pos] += "7";
    });

    $('#ocho').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("8");
        else
            result.text(result.text() + "8");
        calculadora[pos] += "8";
    });

    $('#nueve').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("9");
        else
            result.text(result.text() + "9");
        calculadora[pos] += "9";
    });

    $('#cero').on("click", function () {
        let result;
        result = $("#resultado");
        if ("0" === result.text())
            result.text("0");
        else
            result.text(result.text() + "0");
        calculadora[pos] += "0";
    });

    $('#borrar').on("click", function () {
        $("#resultado").text("0");
        pos  = 0;
        calculadora = [0,0,0];
    });

    $('#suma').on("click", function () {
        if(pos === 0) {
            let result = $("#resultado");
            result.text(result.text() + "+");
            calculadora[1] = "+";
            pos += 2;
        }
    });

    $('#resta').on("click", function () {
        if(pos === 0) {
            let result = $("#resultado");
            result.text(result.text() + "-");
            calculadora[1] = "-";
            pos += 2;
        }
    });

    $('#division').on("click", function () {
        if(pos === 0) {
            let result = $("#resultado");
            result.text(result.text() + "/");
            calculadora[1] = "/";
            pos += 2;
        }
    });

    $('#multiplicación').on("click", function () {
        let result = $("#resultado");
        result.text(result.text() + "*");
        calculadora[1] = "*";
        pos += 2;
    });

    $('#igual').on("click", function () {
        if(pos === 2) {
            let ret;
            switch (calculadora[1]) {
                case "+":
                    ret = parseInt(calculadora[0]) + parseInt(calculadora[2]);
                    break;
                case "-":
                    ret = parseInt(calculadora[0]) - parseInt(calculadora[2]);
                    break;
                case "/":
                    ret = parseInt(calculadora[0]) / parseInt(calculadora[2]);
                    break;
                case "*":
                    ret = parseInt(calculadora[0]) * parseInt(calculadora[2]);
                    break;
            }
            $("#resultado").text(ret);
        }
    });
});