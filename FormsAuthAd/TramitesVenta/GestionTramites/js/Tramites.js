﻿var utl = new BLLUtilidades();
var Tra = new BLLTramites();
var Tradocu = new BLLDocumentosTramites();

var admTramites = (function () {

    var proyec = utl.getUrl('proyec');


    var WsListramite = funcionUrlGlobal("/Servicios/WVistaInmuebleTramites.asmx/GetInmuebles");//Consulto Proyectos CRM
    var WsGenTramite = funcionUrlGlobal("/Servicios/WVistaInmuebleTramites.asmx/Actualizar");//Consulto Proyectos CRM

    var WsActividadesTramiteInmueble = funcionUrlGlobal("/Servicios/WActividadesInmueble.asmx/ListActiInmuebles");//Consulto Proyectos CRM


    var WsActividadesActividadesnmuebleID = funcionUrlGlobal("/Servicios/WActividadesInmueble.asmx/ListActiInmueblesId");//Consulto Proyectos CRM
    var WsActividadesCompletarTramite = funcionUrlGlobal("/Servicios/WActividadesInmueble.asmx/UpdateActiInmuebles");//Consulto Proyectos CRM

    var WsDocumentosTramites = funcionUrlGlobal("/Servicios/WDocumentoActiInmu.asmx/ListDocumentoTramite");//Consulto Proyectos CRM
    
    var WsEliminarDocu = funcionUrlGlobal("/Servicios/WDocumentoActiInmu.asmx/DeleteDocumento_ActInmueble");//Consulto Proyectos CRM
        
    
    var cliente = null;
    var bandera = 0;
    var codigoEmp;
    var tramite;
    var ActividadN;
    var doc;

    var Id;
    var tramit;

    var _addHandlers = function () {


        //Boton que muestra la lista de actividades
        $('#BtnGenTramite').click(function () {

            Tra.GenerarTramites(proyec, WsGenTramite);
            setTimeout(function () { Tra.ListTramites(proyec, WsListramite); }, 1000);
        });
  
        $(document).on('click', '.Infocl', function () {
            tramit = $(this).attr("id");
            
            $('#Actividadesxtramite').show();
            setTimeout(function () { Tra.ListActividadesInmuebles(tramit, WsActividadesTramiteInmueble); }, 1000);


        });


        $(document).on('click', '.Completar', function () {
            Id = $(this).attr("id");
            $('#infoActividadInmueble').modal('show');
             Tra.ActividadInmueblesID(Id, WsActividadesActividadesnmuebleID);
            setTimeout(function () { Tradocu.ListDocumentos($('#TxtActividad').val(), WsDocumentosTramites); }, 1000);
            

        });

        $(document).on('click', '.QuitarDocu', function () {
            Id = $(this).attr("id");
            
            Tradocu.EliminarDocumento(Id, WsEliminarDocu);
            setTimeout(function () { Tradocu.ListDocumentos($('#TxtActividad').val(), WsDocumentosTramites); }, 1000);


        });


        //Boton que muestra la lista de actividades
        $('#BtnTerminada').click(function () {

           

            Tra.CompletarTramites(2, Id, $('#TxtIdTramiteinmueble').val(), WsActividadesCompletarTramite);

            setTimeout(function () { Tra.ListActividadesInmuebles(tramit, WsActividadesTramiteInmueble); }, 1000);
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