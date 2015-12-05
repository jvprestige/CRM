﻿var utl = new BLLUtilidades();
var Ac = new BLLAcuerdosFox();
var _admnego = (function () {
    var WNegoID= "/Servicios/WNegocioFox.asmx/lisNegoID";
    var negocio = utl.getUrl('negocio');

    var _addHandlers = function () {

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
             
                    $("#TxtNombreProyecto").append(nego[0].SUCURSAL);
                    $('#TxtVlrInmueble').append(utl.FormatNumero(nego[0].VLRNEGOCIO));
                    $("#TxtFechaNegocio").append(nego[0].FECHANEGOCIO);
                    $("#TxtInmueble").append(nego[0].CODIGOINMUEBLE);
                    $("#TxtCedula").append(nego[0].CEDULA_P);
                    $("#TxtNombrecliente").append(nego[0].NOMBRECLIENTE);
                    
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    var imprimir = function () {

        $("#BtnImprimir").click(function () {
            javascript: window.print();
        });
        

    }




    var _Inicio = function () {
       /* getHoha(idhoja);
        acuerdo(idhoja);
        ConfiguracionNegocio();*/
        getHoha(negocio);
        imprimir();
      




        Ac.AcuerdosFoxReporte(negocio);
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
})
