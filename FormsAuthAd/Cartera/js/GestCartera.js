﻿var _negocio = new BLLnegocio();
var utl = new BLLUtilidades();
var inmuebles = new BLLInmuebles();
var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var Numeros = /[0-9]/;
var letras = /[a-zA-Z]/;
var _admnegocio = (function () {
    var cedula = "";
    var bandera = 0;
    var proyec = utl.getUrl('proyec');
    var cactual = "";
    var dataSet = [];
    var acuerdoP = [];
    var tipoint;
    var separacion;
    var inmueble;
    var fechaEscr;
    var _addHandlers = function () {
  
        var item;
        var valor = 0;

        $("#checkmanzada").click(function () {
            tipoint = "Manzana";
            $("#checktorre").attr('checked', false);
            $("#checkcasa").attr('checked', false);
            $("#chekcapartamento").attr('checked', false);
        });

        $("#checktorre").click(function () {
            tipoint = "Torre";
            $("#checkmanzada").attr('checked', false);
            $("#checkcasa").attr('checked', false);
            $("#chekcapartamento").attr('checked', false);
        });

        $("#checkcasa").click(function () {
            tipoint = "Casa";
            $("#checkmanzada").attr('checked', false);
            $("#checktorre").attr('checked', false);
            $("#chekcapartamento").attr('checked', false);
        });

        $("#chekcapartamento").click(function () {
            tipoint = "Apartamento";
            $("#checkmanzada").attr('checked', false);
            $("#checktorre").attr('checked', false);
            $("#checkcasa").attr('checked', false);
        });

       $(document).on('click', '#BtnCrearH', function () {
            console.log(Dtohoja())
            console.log(acuerdoP)
            Validar();
           _negocio._addHoja(Dtohoja(), inmueble, acuerdoP);
            
        });

        $(document).on('click', '#BtnDisponibilidad', function () {
            switch (bandera) {
                case 0:
                    document.getElementById("Lvalor").innerHTML = "";
                    cedula = $("#TxtIdentidad").val();
                    _negocio._Getcliente(cedula);
                    cactual = cedula;
                    break;
                case 1:
                    document.getElementById("Lvalor").innerHTML = "";
                    cedula = $("#TxtIdentidad").val();
                    utl._DtoAsociado(cedula);
                    cactual = localStorage.getItem("CedulaAct");
                    _negocio._Getcliente(cactual);
                    break;

            }
                
        });
     

     

        $(document).on('click', '#BtnAsociadoc', function () {
            cedula = $('#TxtIdentidad').val();
            var val = localStorage.getItem("CedulaAct");
            localStorage["CedulaAct"] = $('#TxtIdentidad').val();
            if (val == cedula)
            {
                utl._GetclienteAsociado(cedula);
                $("#asociadoModal").modal("show");
            }
        });
        
        $(document).on('click', '.agregarAs', function () {
            $("#TxtIdentidad").val($(this).attr("id"));
            $('#asociadoModal').modal("hide");
            bandera = 1;
        });

        $(document).on('click', '.CargarN', function () {
            var datos = $(this).attr("id");
            var result = datos.split("/")
            var persona = result[0];
            separacion = result[1];
            inmueble = result[2];
            $('#TxtIdentidad').val(persona);
            $('#datos').show();
            $('#BtnDisponibilidad').click();
            $('#clientesnegocio').hide();
        });

        $("#Btnfecha").click(function () {
             _negocio.Modificarfecha(item, $("#nuevafc").val(),valor)
        });

        $(document).on('click', '.BtFecha', function () {
            var result = $(this).attr("id");
            var dato = result.split("-");
            $("#fechAc").val(dato[0]);
            item = dato[1];
            valor = dato[2];
            $("#FechasPagos").modal("show")
        });

        $('#Btncerrar').click(function () {
            $('#Principal').hide();
            $('#clientesnegocio').show();
        });

        $("#Textinicial").change(function () {
            var c_inicial = $('#Textinicial').val()
            _negocio._RecalcularCredito();
            $('#Textinicial').val(utl.FormatNumero(c_inicial))
        });

        $('#Textcuota').change(function () {
            dataSet = [];
            var date = new Date();
            var dia = date.getDate();
            var año = date.getFullYear();
            var mes = date.getMonth() + 1;
            var fecha = año + "/" + mes + "/" + dia;
            var cuotas = $('#Textcuota').val();
            var valorC = $("#Lvalor").val();
            var valor = +valorC.replace(/[^\d\.-]/g, '');
            var val_casa = valor;
            var amorizar = 0.0;
            var credito = parseFloat(val_casa) * (30) / 100;
            $("#valcredito").val(credito);
            var nomc;
            amorizar = parseFloat(credito) / cuotas;
            for (var i = 0; i < cuotas; i++) {
                if (mes < 10) { mes = '0' + mes };
                if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
                fecha = año + "/" + mes + "/" + dia;
                if (i === 0) { nomc = "Separación"; } else { nomc = "Cuota No." + i; }
                dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': amorizar.toFixed(0) });
                mes = parseInt(mes) + 1;
            }
            
            _FechaEscitura(fecha)
            tabla(dataSet);
            $('#dataTable').jqxGrid('refresh');
            $('#dataTable').jqxGrid('refreshdata');
        });
        
        $(document).on('click', '.Btimprimir', function () {
            var idhoja = $(this).attr("id");
            window.open("Hoja_Negocio2.html?idhoja=" + idhoja + '&proyec="' + proyec, 'Graph', 'height=900px,width=650px;resizable=false');
            //window.location = "Hoja_Negocio2.html?idhoja="+idhoja+"";
        });

    }

    var tabla = function (setdata) {

        var source =
                 {
                    localData: setdata,
                    datatype: "array",
                    dataFields:
                     [
                         { name: 'CUOTA', type: 'string' },
                         { name: 'FECHA_PAGO', type: 'string' },
                         { name: 'VALOR_CUOTA', type: 'string' }
                     ]
                 };
        
        var dataAdapter = new $.jqx.dataAdapter(source);

        // initialize jqxDataTable
        $("#dataTable").jqxGrid(
        {
            width: "100%",
            source: dataAdapter,
            pageable: true,
            editable: true,
            autoheight: true,
            columnsresize: true,
            autoRowHeight: true,
            columns: [
              {
                  text: 'CUOTA',
                  columntype: 'CUOTA',
                  datafield: 'CUOTA',
                  editable: false,
              },
              {

                  text: 'FECHA_PAGO',
                  datafield: 'FECHA_PAGO',
                  columntype: 'string',
                  columntype: 'datetimeinput',
                  cellsformat: 'd'

              },

             {
                 text: 'VALOR_CUOTA',
                 editable: false,
                 columntype: 'VALOR_CUOTA',
                 datafield: 'VALOR_CUOTA',
             }
            ]
        });
        //console.log(dataAdapter)
        acuerdoP = dataAdapter.cachedrecords;
        console.log(acuerdoP)
        ///setdata = null;
   };

    var _FechaEscitura = function (fechaesc) {
        var fechescr = fechaesc.split("/");
        var ent = fechescr[0];
        var mesent = parseInt(fechescr[1]) + 1;
        var diasent = fechescr[2];
        if (mesent > 12) { ent = parseInt(ent) + 1; mesentsb = 1; }
        if (diasent < 10) { diasent = '0' + diasent };
        if (mesent < 10) { mesent = '0' + mesent }
        var fechescri = ent + "/" + mesent + "/" + diasent;
        $("#Textescritura").val(fechescri)
        _Fechaentrega(fechescri);
    }

    var _Fechaentrega= function (fechaentr) {
        var fechent = fechaentr.split("/");
        var ent = fechent[0];
        var mesent = parseInt(fechent[1]) + 1;
        var diasent = fechent[2];
        if (mesent > 12) { ent = parseInt(ent) + 1; mesentsb = 1; }
        if (mesent < 10) { mesent = '0' + mesent }
        var fechasent = ent + "/" + mesent + "/" + diasent;
        $("#Textentrega").val(fechasent)
        _Fechasubrogracion(fechasent);
    }

    var _Fechasubrogracion=function (fechasub) {
        var fechasubr = fechasub.split("/");
        var entsb = fechasubr[0];
        var mesentsb = parseInt(fechasubr[1]) + 1;
        var diasentsb = fechasubr[2];
        if (mesentsb > 12) { entsb = parseInt(entsb) + 1; mesentsb = 1; }
        if (mesentsb < 10) { mesentsb = '0' + mesentsb }
        var fechasubro = entsb + "/" + mesentsb + "/" + diasentsb;
        $("#Textsubrogracion").val(fechasubro)
    }

    var Dtohoja = function () {
        var negocio = {};
        negocio.CLASE_INMU = tipoint;
        negocio.PROPIETARIO = $("#TxtNombres").val();
        negocio.CEDULA_P = cedula;
        negocio.EXPEDICION = $("#TextExpedicion").val();
        negocio.ESTADO_C = $("#Textcivil").val();
        negocio.FECHA_NACI = $("#Textnacimiento").val();
        negocio.LUGAR = $("#Textlugar").val();
        negocio.DIRECCION_R = $("#Textdireccion").val();
        negocio.TELEFONO_P = $("#Textphone").val();
        negocio.EMPRESA = $("#TextEmp").val();
        negocio.TELFONO_EMP = $("#TexttelC").val();
        negocio.CARGO = $("#Textcargo").val();
        negocio.PROFESION = $("#Textprofesion").val();
        negocio.DIRECCION_EMPR = $("#TextdireccionE").val();
        negocio.ANTIGUEDAD = $("#Textantiguedad").val();
        negocio.CORREO = $("#Textcorreo").val();
        negocio.NOMBRE_CONY = $("#Textconyugue").val();
        negocio.CEDULA_CUY = $("#TextidentificacionC").val();
        negocio.TELE_CONY = $("#TexttelC").val();
        negocio.N_HIJO = $("#TextNh").val();
        negocio.INTERES_COM = $("#TextInt").val();
        negocio.PROYECTO_INT = $("#TextPinteres").val();
        negocio.VALOR_CASA = $("#Lvalor").val();
        negocio.INICIAL = $("#Textinicial").val();
        negocio.CREDITO = $("#Textcredito").val();
        negocio.BANCO = $("#ComBancos").val();
        negocio.NO_CREDITO = $("#Textcuota").val();
        negocio.FECHA_ES = $("#Textescritura").val();
        negocio.FECHA_ENT = $("#Textentrega").val();
        negocio.FECHA_SUBRO = $("#Textsubrogracion").val();
        negocio.ASESOR_INFO = $("#Textasesorinf").val();
        negocio.MEDIO_ENT = $("#TextmedioInf").val();
        negocio.INGRESO = $("#TextIngresos").val();
        negocio.USER_CARTERA = $("#CmbAsesorCart").val();
        negocio.ASOCIADO = cactual;
        negocio.SEPARACION = separacion;
        return negocio;
      
    }

    var Validar = function () {



        if ($('#TxtNombres').val().length < 1 || !letras.test($('#TxtNombres').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                '</br></br>1 - No a digitado nada en el campo nombre' +
                '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TxtNombres').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        } else if ($('#TxtIdentidad').val().length < 1 || !Numeros.test($('#TxtIdentidad').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo identificacion' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TxtIdentidad').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#TextExpedicion').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo identificacion' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextExpedicion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textcivil').val().length < 1 || !letras.test($('#Textcivil').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo estado civil' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textcivil').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textnacimiento').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo fecha de nacimiento' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textnacimiento').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textlugar').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo lugar' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textlugar').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textdireccion').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo dirección' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textdireccion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textphone').val().length < 1 || !Numeros.test($('#Textphone').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Telefóno' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textphone').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextEmp').val().length < 1 || !letras.test($('#TextEmp').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Empresa' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextEmp').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcargo').val().length < 1 || !letras.test($('#Textcargo').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Cargo' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textcargo').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textprofesion').val().length < 1 || !letras.test($('#Textprofesion').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Profesión' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textprofesion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextdireccionE').val().length < 1 || !letras.test($('#TextdireccionE').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Dirección' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextdireccionE').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textantiguedad').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Antiguedad' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textantiguedad').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcorreo').val().length < 1 || !emailreg.test($('#Textcorreo').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Correo' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textcorreo').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textconyugue').val().length < 1 || !letras.test($('#Textconyugue').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Conyugue' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textconyugue').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextidentificacionC').val().length < 1 || !Numeros.test($('#TextidentificacionC').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Identificación' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextidentificacionC').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TexttelC').val().length < 1 || !Numeros.test($('#TexttelC').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo celular' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TexttelC').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextIngresos').val().length < 1 || !Numeros.test($('#TextIngresos').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo ingresos' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextIngresos').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextNh').val().length < 1 || !Numeros.test($('#TextNh').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Nro de hijos' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextNh').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextInt').val().length < 1 ) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Interes de compra' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextInt').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextPinteres').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo proyecto de interes' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextPinteres').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Lvalor').val().length < 1 || !Numeros.test($('#Lvalor').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Valor' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Lvalor').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textinicial').val().length < 1 || !Numeros.test($('#Textinicial').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Cuota inicial' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textinicial').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcredito').val().length < 1 || !Numeros.test($('#Textcredito').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Credito' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textcredito').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#ComBancos').val().length < 1 || !letras.test($('#ComBancos').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Bancos' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#ComBancos').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcuota').val().length < 1 || !Numeros.test($('#Textcuota').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Nro de cuotas' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textcuota').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textescritura').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Fecha de escritura' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textescritura').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textentrega').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Fecha de entrega' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textentrega').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textsubrogracion').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Fecha de sugrogación' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textsubrogracion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textasesorinf').val().length < 1 || !letras.test($('#Textasesorinf').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo asesor' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#Textasesorinf').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#TextmedioInf').val().length < 1 || !letras.test($('#TextmedioInf').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo medio por el cual se entero' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#TextmedioInf').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#CmbAsesorCart').val().length < 1 || !letras.test($('#CmbAsesorCart').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo asesor de cartera' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            //$("#TxtIdentidad").css("background-color", "yellow");
            $('#CmbAsesorCart').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }




    }
    var _Inicio = function () {
        $("#Lvalor").hide();
        $("#Butimprimir").hide();
        inmuebles._lisnegociosepracion(proyec);
        $('#datos').hide();
        utl.Bancos();
        utl.AsesorCartera();
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }

}());

$(document).ready(function () {
  

    
   $('#TextExpedicion').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#Textnacimiento').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#Textescritura').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#Textentrega').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#Textsubrogracion').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#nuevafc').datepicker({
        format: 'yyyy/mm/dd',
    });

    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
        "preventDuplicates": false,
        "onclick": true,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "1000",
    };


    _admnegocio.init();
})
