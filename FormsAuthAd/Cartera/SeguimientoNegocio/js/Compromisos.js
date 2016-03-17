﻿var utl = new BLLUtilidades();
var Ac = new BLLAcuerdosFox();
var Pag = new BLLPagosFox();
var Tar = new BLLTareas();
var _admnego = (function () {
    var WNegoID = funcionUrlGlobal("/Servicios/WNegocioFox.asmx/lisNegoID");
    var negocio = utl.getUrl('negocio');

    var _addHandlers = function () {

        $("#BtnImprimir").click(function () {
            javascript: window.print();
        });
    }
    var getHoha = function (n) {
        jsondata = "{'c':" + JSON.stringify(n) + "}"
        $.ajax({
            type: "POST", url: WNegoID, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {
                    var nego = result.d;

                    $('#TxtVlrInmueble').append(utl.FormatNumero(nego[0].VLRNEGOCIO));
                    $("#TxtInmueble").append(nego[0].CODIGOINMUEBLE);
                    $("#TxtCedula").append(nego[0].CEDULA_P);
                    $("#TxtNombrecliente").append(nego[0].NOMBRECLIENTE);
                  
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

 
   

    var _Inicio = function () {
        $(".persona").append(negocio);
        getHoha(negocio);
        Ac.AcuerdosReporte(negocio);
        Pag.PagosFoxCompromisos(negocio);
        Tar.TareasNegocioCompromisoReporte(negocio);
        
    }


    return {
        init: function () {

            _Inicio();
            _addHandlers();

        },
    }

}());

$(document).ready(function () {

    _admnego.init();
    setTimeout(function () { javascript: window.print(); }, 1000);
   
})