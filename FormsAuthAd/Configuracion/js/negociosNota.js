﻿
var Py = new BLLProyectos()

var admComercialProyect = (function () {

    var WSLisProyect = "/ServiciosFox/WProyectos.asmx/LisProyecTrabajador";
    //var WSLisProyect = "/ServiciosFox/WProyectos.asmx/ProyectosTrabajador";
    var _addHandlers = function () {


    }

    var _Inicio = function () {
        //var persona = '';
        Py.LisProyectrabajdoresNota(WSLisProyect);
        $('#mensaje').hide();

    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }

}());

$(document).ready(function () {
    $(".scroll-area").scrollspy({ target: "#myNavbar" });
    admComercialProyect.init();
});