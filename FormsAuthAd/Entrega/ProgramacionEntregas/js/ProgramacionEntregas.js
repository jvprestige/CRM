﻿//DSDasas
var Entg = new BLLEntregas();
var Com = new BLLComercial();
var inm = new BLLInmuebles();
var Proy = new BLLProyectos();
var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM
var WsLisImnuE = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/InmuEstados");//Listar 
var Wacuerdo = funcionUrlGlobal("/Servicios/WResponsableCalidad.asmx/proyectosComparados");//Listar Tareas
var Tra = new BLLTrabajadores();
var admEntregas= (function () {

   
    var cliente = null;
    var bandera = 0;
    var proyecto;
    var favorites = [];
    var myObj;
    var UserIdentity;
    var DirObra;
    var _addHandlers = function () {
        // tabla
        jsondata = "{}"
        $.ajax({
            type: "POST", url: Wacuerdo, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null) {

                }
                else {
                     }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
        function Recargar() {
            setTimeout(function () {
                Entg.ListInmueblesProyecto(proyecto); $("#datos").show();

            }, 1000);


            if (UserIdentity == DirObra) {
                $("#BtnEditar").show();
                $("#BtnGuardar").hide();
                $("#BtnCancelar").hide();
            } else {
                $("#BtnEditar").hide();
                $("#BtnGuardar").hide();
                $("#BtnCancelar").hide();
            }

        }
        $(document).on('click', '.Info', function () {
            proyecto = $(this).attr("id");
            
            var datos = $(this).attr("tag");
            var result = datos.split("/")
            Enviado = result[0];
            EnviadoPor = result[2];
            EnviadoA = result[1];
            Proyectos = result[3];
            Fecha = result[4];
            DirObra = result[5];
            UserIdentity = result[6];
            Nsolicitud = result[7];
            
            $("#TxtFechaEnviado").val(Enviado);
            $("#TxtEnviadoA").val(EnviadoA);
            $("#TxtEnviadoPor").val(EnviadoPor);
            $("#TxtProyectos").val(Proyectos);
            $("#TxtFecha").val(Fecha);
            $("#TxtDirObra").val(DirObra);
            $("#Nsolicitud").text(Nsolicitud);
          
            Recargar();
        });
        $("#BtnGuardar").click(function () {
           

            var ListadoInmuebles = [];
            $('#esd tbody tr').each(function () {
               
                var Id = $(this).find("td").eq(0).html();
                var Manzana = $(this).find("td").eq(1).html();
                var Inmueble = $(this).find("td").eq(2).html();

                if( $(this).find(('input[type="checkbox"]')).is(":checked") == true){
                    var Confirmado = 1;

                }
                else {
                    var Confirmado = 0;
                }
               

                var Observaciones = $(this).find(('input[class="text"]')).val();

                var InmuebleConfirmado = {

                    "ID_INMUEBLES_ENTREGAS": Id,
                    "CONFIRMAOBRA": Confirmado,   
                    "OBSERVACIONES": Observaciones,   
                };
                ListadoInmuebles.push(InmuebleConfirmado);
            });
            //if (ListadoInmuebles)
            Entg.ConfirmarEntrega(ListadoInmuebles);
            Recargar();

            //$('#ModalAsignar').modal('hide');
        });

        $("#BtnEditar").click(function(){
            $(".check").prop('disabled', false);
            $(".text").prop('disabled', false);
            
            $("#BtnEditar").hide();
            $("#BtnGuardar").show();
            $("#BtnCancelar").show();
        });

        $("#BtnCancelar").click(function () {
            $(".check").prop('disabled', true);
            $(".text").prop('disabled', true);
            $("#BtnEditar").show();
            $("#BtnGuardar").hide();
            $("#BtnCancelar").hide();
        });

        $("#BtnNueva").click(function () {
            favorites = [];
            $('#ModalAsignar').modal('show');
        });

        $("#BtnCerrar").click(function () {
            favorites = [];
            Entg.CrearTablaInmueblesBorrador(favorites);
        });

       
        $(document).on('change', '#ComProyect', function () {

            Com.ListbProyec($("#ComProyect").val());

        });
        $(document).on('change', '#Mazanasb', function () {
           
            inm.EstadosInmuebles2(WsLisImnuE, 24, $('#Mazanasb').val());

        });
       
        $(document).on('click', '#BtnAdd', function () {

          
                if ($("#Mazanasb").val().length == 0) {

                    toastr.error('CRM Mayales - Notificacion' +
                      '</br></br> Seleccione una manzana');
                } else if ($("#Inmueble").val().length == 0) {
                    toastr.error('CRM Mayales - Notificacion' +
                         '</br></br> Seleccione un inmueble');
                } 
               else {

                    if (Entg.ValidarReferencia($("#Inmueble").val()) != 1) {
                        //create object
                        myObj = {
                            "ID_PROYECTO": $("#ComProyect").val(),    //your artist variable
                            "DIROBRA": $("#CombAsesores").val(),   //your title variable
                            "ENVIADOA": $("#CombAsesores").val(),
                        };




                        //create object
                        var myObj2 = {

                            "REFERENCIA_INMUEBLE": $("#Inmueble").val(),   //your title variable
                            "MANZANA_O_TORRE": $("#Mazanasb option:selected").text(),   //your title variable
                            "CASA_O_APTO": $("#Inmueble option:selected").text(),   //your title variable
                        };

                        var index = favorites.findIndex(function (item, i) {
                            return item.REFERENCIA_INMUEBLE === $("#Inmueble").val()
                        });


                        if (index == -1) {
                            favorites.push(myObj2);
                        } else {
                            toastr.error('CRM Mayales - Notificacion' +
                                  '</br></br>Este inmueble ya se encuentra agregado.');
                        }

                        Entg.CrearTablaInmueblesBorrador(favorites);

                    } else {

                        toastr.error('CRM Mayales - Notificacion' +
                                 '</br></br>Ya hay una solicitud con este inmueble.');
                    }

                }

             
        

            
        });
     
        $(document).on('click', '.quitar', function () {


            var referencia = $(this).attr("id");
          

            event.stopPropagation();
            if (confirm("Estas seguro(a) de eliminar esto?")) {
                this.click;

                var index = favorites.findIndex(function (item, i) {
                    return item.REFERENCIA_INMUEBLE === referencia
                });


                favorites.splice(index, 1);



                Entg.CrearTablaInmueblesBorrador(favorites);

            }
            else {

            }
            event.preventDefault();

         
          
        });
        
        
        $("#Btnregis").click(function () {

            // Initialize your table
            var oTable = $('#esd2').dataTable();

           
            
            if ($("#ComProyect").val().length == 0) {

                toastr.error('CRM Mayales - Notificacion' +
                  '</br></br> Seleccione un proyecto');
            } else if ($("#CombAsesores").val().length == 0) {
                toastr.error('CRM Mayales - Notificacion' +
                     '</br></br> Seleccione un director de obra');
            } else if (oTable.fnGetData().length == 0) {
                toastr.error('CRM Mayales - Notificacion' +
                   '</br></br> Agregue inmuebles por favor');
            } else {
                Entg.InsertEntregas(myObj, favorites);
                favorites = [];
                Entg.CrearTablaInmueblesBorrador(favorites);
                $('#ModalAsignar').modal('hide');

            }
           

        });

        $(document).on('click', '.enviar', function () {
            var id = $(this).attr("id");
            Entg.UpdateEntregas(id);
        });

        
        
    }

    var _Inicio = function () {
        $("#datos").hide();
        $("#BtnEditar").hide();
        $("#BtnGuardar").hide();
        $("#BtnCancelar").hide();
        Entg.ListProgramacionEntregas();
      
        Proy.ListProyec(2, WsListProyec);
        Tra.getrabajadores();
      
       
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {
   
    admEntregas.init();
});




