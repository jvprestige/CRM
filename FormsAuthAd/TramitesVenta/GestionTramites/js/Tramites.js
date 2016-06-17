﻿var utl = new BLLUtilidades();
var Tra = new BLLTramites();


var admTramites = (function () {

    var proyec = utl.getUrl('proyec');


    var WsListramite = funcionUrlGlobal("/Servicios/WVistaInmuebleTramites.asmx/GetInmuebles");//Consulto Proyectos CRM
    var WsGenTramite = funcionUrlGlobal("/Servicios/WVistaInmuebleTramites.asmx/Actualizar");//Consulto Proyectos CRM



    var cliente = null;
    var bandera = 0;
    var codigoEmp;
    var tramite;
    var ActividadN;
    var doc;
    var _addHandlers = function () {


        //Boton que muestra la lista de actividades
        $('#BtnGenTramite').click(function () {

            Tra.GenerarTramites(proyec, WsGenTramite);
            setTimeout(function () { Tra.ListTramites(proyec, WsListramite); }, 1000);
        });



    }

   
    var _Inicio = function () {
        //Lista de actividades y de tramites
      
      
        Tra.ListTramites(proyec, WsListramite);

    }
    //Retorna la funcion inicial
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {
    //Inicial del tramite
    admTramites.init();
});