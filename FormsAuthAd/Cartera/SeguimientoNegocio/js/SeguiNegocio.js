﻿
var Seg = new BLLSeguiNegocios();
var Ac = new BLLAcuerdosFox();
var tar = new BLLTareas();
var com = new BLLCompromisoCuenta();
var utl = new BLLUtilidades;
var Pag = new BLLPagosFox();
var proyecnombre = utl.getUrlnom('proyec');
var proyec = utl.getUrlpro('proyec');
var negocio2 = "";
var admUser = (function () {

    var WsListNegocio = funcionUrlGlobal("/Servicios/WNegocioFox.asmx/ConsultaNegociosCompromisos");//Consulto Proyectos CRM
    var WsListNegocioVE = funcionUrlGlobal("/Servicios/WNegocioFox.asmx/ConsultaNegociosCompromisosVE");//Consulto Proyectos CRM
    var WsListNegocioES = funcionUrlGlobal("/Servicios/WNegocioFox.asmx/ConsultaNegociosCompromisosES");//Consulto Proyectos CRM
    var Wsurltodosnegocios = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/TODO"); //Actualizar todos los negocios de CRM desde MULTIFOX


    var _addHandlers = function () {
      


        //Boton para imprimir los compromisos de pagoss
        $("#BtnImprimirCuenta").click(function () {
            window.open("Estacuenta.html?negocio=" + negocio);
            //window.open("ReporteCompromisos.html?negocio=" + negocio);
        });
        //-----------------FIN--------------------//

        //Boton de actualizar todos los Negocios de CRM con MULTIFOX
        $("#BtnActualizar").click(function () {


            $('#Cargando').show();
            Seg.ActualizarTodosLosNegocios(Wsurltodosnegocios);

            setTimeout(function () { Seg.ListNegocios(WsListNegocio, proyec); }, 2000);
            
        });
        //--------------------FIN------------------------///

        //Boton para imprimir un estado de cuenta
        $("#BtnImprimir").click(function () {

            window.open("Estacuenta.html?negocio=" + negocio);
        });
        //-----------------FIN--------------------//


        

        $('#BtnEditar').click(function () {
            $('#BtnEditar').hide();
            $('#BtnPost').show();
            $('#BtnTerminada').hide();
            $('#Txtdetalle').attr('readonly', false);
            $('#fechainfo').attr('readonly', false);
        })

        $('#BtnPost').click(function () {
            if ($('#Txtdetalle').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                    '</br> El campo descripcion de Tarea se encuentra vacio');
            }
            else {
                if ($('#fechainfo').val().length < 1) {
                    toastr.error('CRM Mayales - Notificacion' +
                    '</br> El campo Fecha de Tarera se encuentra vacio');
                }
                else {
                    if ($('#TxtMotivo').val().length < 1) {
                        toastr.error('CRM Mayales - Notificacion' +
                        '</br> El campo descripcion se encuentra vacio');
                    }
                    else {
                        var fechaEs = $('#fechainfo').val()
                        if (fechaEs < fecha) {
                            dia = null;
                            mes = null;
                            toastr.error('CRM Mayales - Notificacion' +
                           '</br> La fecha selcccionada no puede ser menor a la del dia actual');
                        }
                        else {
                            dia = null;
                            mes = null;

                            tar.PosponerTarea(_PosTareas(), _BitacorasDTO());
                            setTimeout(function () { tar.TareasNegocioCompromisoCO(negocio); }, 1000);
                           
                       //     setTimeout(function () { tar.lisbitacoras(cedula); }, 1000);
                            setTimeout(function () { tar.lisbitacoras(t); }, 1000)
                            $('#infoTareas').modal('hide');
                            /*
                            setTimeout(function () { Tr.LisTareas(cedula, 0); }, 1000);
                            setTimeout(function () { Cli.ClienteHistorial(cedula); }, 2000);
                            setTimeout(function () { Tr.ListadoTareasUser(); }, 2000);*/
                        }

                    }
                }
            }
        });

        //Boton para traerse el historial de la tarea
        $(document).on('click', '.historial', function () {
            cedula = $(this).attr("id");
            tareabuscar = $(this).attr("tga");
            tar.InfoTareasCompromiso(cedula);
            com.InfoCompromisoCuota(cedula);
            $('#infoTareas').modal('show');
            $('#BtnEditar').show();
            $('#BtnTerminada').show();
            $('#BtnPost').hide();
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
            tar.lisbitacoras(cedula);

        });
        //---------------------------FIN----------------------------------//

        $(document).on('click', '#BtnTerminada', function (event) {

            tar.TerminarTareaNego(_ComTareas(), _BitacorasDTO());
            setTimeout(function () { Ac.AcuerdosFoxCompromiso(negocio); }, 1000);
            setTimeout(function () { tar.TareasNegocioCompromisoCO(negocio); }, 1000)
            $('#infoTareas').modal('hide');
        });

        //Asignar Proyectos al trabajador
        $(document).on('click', '.Detallett', function () {
            if (negocio2 != "") {
                celda = document.getElementById(negocio)
                celda.style.backgroundColor = "white";
             
            }
            negocio = $(this).attr("id");
            cedula = $(this).attr("tag");
            celda = document.getElementById(negocio)
            celda.style.backgroundColor = "gray";
           
            negocio2 = negocio;
          $(".div").css({ "display": "inline" });

            $('#PanelNego').show();
            $('#PanelTareas').show();
           
            tar.TareasNegocioCompromisoCO(negocio);
            Ac.AcuerdosFoxCompromiso(negocio);
            Pag.PagosFox(negocio);
           
        });

        $(document).on('click', '.Detallett1', function () {
            negocio = $(this).attr("id");
            
            $(".div").css({ "display": "inline" });
            $('#TxtClientes').val(cedula);
            $('#Tareas').modal('show');
        });

        $(document).on('click', '#BtnCreaTarea', function (event) {
            var compromiso = {};
                
           
             if ($('#TxtClientes').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                '<br/> Seleccione al menos un cliente');
             }

            if ($('#TxtDescripcion').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                '<br/> no ha digitado nada en el campo descripcion de tarea');
            }
            else {
                if ($('#TxtFechaTarea').val().length < 1) {
                    toastr.error('CRM Mayales- Notificacion' +
                        '<br/> No a seleccionado ninguna Fecha para realizar la tarea');
                }
                else {
                    var fechata = $('#TxtFechaTarea').val()
                    if (fechata < fecha) {
                        toastr.error('CRM  Mayales Notificacion' +
                            '</br> la fecha seleccionada para la tarea no puede ser menor que la actual');
                    }
                    else {

                        tar.InsertCompromiso(_DtoTareas());
                                         
                        setTimeout(function () { $('#TblAcuerdos2').find('tr').each(function () {
                            var row = $(this);
                            if (row.find('input[type="checkbox"]').is(':checked')) {


                                compromiso.ID_TAREA = $('#TxtClientes').val();
                                compromiso.CODIGO = $(this).attr("id");
                                com.InserCompromisoCuota(compromiso);
                                $('#Tareas').hide();
                            }
                        });
                        }, 2000);
                        setTimeout(function () { tar.TareasNegocioCompromisoCO(negocio); }, 2000);

                    }
                }
            }
        });

        $(document).on('click', '.Infocl', function () {
            cedula = $(this).attr("id");
            tar.InfoTareasNego(cedula);
            $('#infoTareas').modal('show');
            $('#BtnEditar').show();
            $('#BtnTerminada').show();
            $('#BtnPost').hide();
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
            tar.lisbitacoras(cedula);

        });


        $("#FiltroVE").click(function () {
           
            Seg.ListNegocios(WsListNegocioVE, proyec);
        });
        $("#FiltroES").click(function () {
          
            Seg.ListNegocios(WsListNegocioES, proyec);

        });
    };

    var _PosTareas = function () {
        var postarea = {};
        postarea.ID_TAREA = cedula;
        postarea.CONCEPTO = $('#Txtdetalle').val();
        //  postarea.CLIENTE = cedula;
        postarea.ESTADO = "PS";
        return postarea;
    }

    var _ComTareas = function () {
        var postarea = {};
        postarea.ID_TAREA = cedula;
        postarea.CONCEPTO = $('#Txtdetalle').val();
        //  postarea.CLIENTE = cedula;
        postarea.ESTADO = "TR";
        return postarea;
    }


    var _DtoTareas = function () {
        var tarea = {};
        tarea.cliente = $('#TxtClientes').val();
        tarea.trabajador = '';
        tarea.concepto = $('#TxtDescripcion').val();
        tarea.FECHAINICIO =  moment($('#TxtFechaTarea').val()).format("YYYY/MM/DD");
        tarea.FECHAFIN = moment($('#TxtFechaTarea').val()).format("YYYY/MM/DD");
        tarea.NEGOCIO = negocio;
        tarea.estado = 'CO';
        tarea.TIPO = 'CO';
        return tarea;
    }
    var _BitacorasDTO = function () {

        var bitacora = {};
        bitacora.tarea = cedula;
        bitacora.motivo = $('#TxtMotivo').val();
        bitacora.FECHAMOD = $('#fechainfo').val();
        return bitacora;
    }
    var _Inicio = function () {
        $('#TxtFechaTarea').datepicker({
            format: 'yyyy/mm/dd',
        });
        $('#Cargando').hide();
        $("#NombreProyecto").text(proyecnombre);
        Seg.ListNegocios(WsListNegocio, proyec);
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }

}());
$(document).ready(function () {
    admUser.init();
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
        "preventDuplicates": false,
        "onclick": false,
        "showDuration": "100",
        "hideDuration": "1000",
        "timeOut": "4000",
    };
})

