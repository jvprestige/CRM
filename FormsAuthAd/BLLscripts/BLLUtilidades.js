﻿


var Wbancos = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_Bancos");
var Wgetcliente = funcionUrlGlobal("/Servicios/WClientes.asmx/GetClientesT");
var WsLisTra = funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListTrabajadores");


//Funcion que devuelve la URL del proyecto
function funcionUrlGlobal(url) {
    var opcion = 'PU';
    var UrlGlobal= "";
    if (opcion == 'PU') { UrlGlobal = '/CRM' + url; } else if (opcion == '') { UrlGlobal = url; } else if (opcion == 'PR') { UrlGlobal = '/CRM_TEST' + url; }
    return UrlGlobal;
}


function BLLUtilidades() {

    BLLUtilidades.prototype.getUrl = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function openPdf(e, path, redirect) {
        // stop the browser from going to the href
        e = e || window.event; // for IE
        e.preventDefault(); 

        // launch a new window with your PDF
        window.open(path, 'somename'/* options */);

        // redirect current page to new location
        window.location = redirect;
    }

    BLLUtilidades.prototype.AsesorCartera = function () {
        $.ajax({
            type: "POST", url: WsLisTra,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null) {
                    document.getElementById("#CmbAsesorCart").innerHTML = ""
                    _ComboAsesor(result.d)
                }
                else {
                    _ComboAsesor(result.d)
                }
            },
            error: function (msg) { alert(msg.responseText); }
        });
    }

    BLLUtilidades.prototype.Bancos = function () {
        $.ajax({
            type: "POST", url: Wbancos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null)
                {  
                    document.getElementById("#ComBancos").innerHTML = ""
                    _ComboBancos(result.d)
                }
                else
                {    
                    _ComboBancos(result.d)
                }
            },
            error: function (msg) { alert(msg.responseText); }
        });
    }

    BLLUtilidades.prototype._GetclienteAsociado = function (cedula) {
        var datos = "{ 'c':" + JSON.stringify(cedula) + " }";
        $.ajax({
            type: "POST", url: WclienteAsociado, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) { if (result.d == "") { BLLUtilidades.TablaAsociados(result.d) } else { BLLUtilidades.TablaAsociados(result.d) } },
            error: function (msg) { alert(msg.responseText); }
        });
     
    }

    BLLUtilidades.prototype._DtoAsociado = function (cedula) {
        var datos = "{ 'c':" + JSON.stringify(cedula) + " }";
        $.ajax({
            type: "POST", url: Wgetcliente, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) { if (result.d == "") { BLLUtilidades.asociaodDto(result.d) } else { BLLUtilidades.asociaodDto(result.d) } },
            error: function (msg) { alert(msg.responseText); }
        });

    }

    BLLUtilidades.asociaodDto = function (cliente) {
        $.each(cliente, function (i, item) {
            $('#TxtNombres').val(item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO);
            $('#Textcivil').val(item.ESTADO_CIVIL);
            $('#Textdireccion').val(item.DIRECCION + " " + item.BARRIO);
            $('#Textphone').val(item.TELEFONO2);
            $('#TextEmp').val(item.EMPRESA);
            $('#Textcorreo').val(item.EMAIL);
            $('#TextInt').val(item.INMU_INTERES);
            $('#Textasesorinf').val(item.ASESOR);
            $('#TextmedioInf').val(item.INFORMACION);
        })

    }

    BLLUtilidades.TablaAsociados = function (cedula) {
        document.getElementById("asociados").innerHTML = "";
        var tabla = '<table id="asociadosC" class="table table-striped table-bordered table-hover dataTable no-footer" role="grid" aria-describedby="example2_info">';
        tabla += '<thead>';
        tabla += '<tr>';
        tabla += '<th>Nombre</th>';
        tabla += '</tr>';
        tabla += '</thead>';
        tabla += '<tbody>';
        $.each(cedula, function (i,item) {
            tabla += '<tr>';
            tabla += '<td id='+item.CEDULA+' class="agregarAs">' + item.NOMBRES+" "+ item.P_APELLIDO +" "+item.S_APELLIDO+'</td>';
            tabla += '</tr>';
        })
        tabla += '</tbody>';
        tabla += '</table>';
        $('#asociados').append(tabla);
        $('#asociadosC').dataTable();
    }
  
    _ComboBancos= function (banco) {
        
        $.each(banco, function (i, item) {
            var combo = '<option>';
            combo += item.NOMBRE_BAN;
            combo += '</option>';
            $('#ComBancos').append(combo);
        })
         
    }

    _ComboAsesor = function (banco) {

        $.each(banco, function (i, item) {
            var combo = '<option>';
            combo += item.T_CEDULA;
            combo += '</option>';
            $('#CmbAsesorCart').append(combo);
        })

    }


    BLLUtilidades.prototype.FormatNumero = function (numero) {
        var NumeroF = accounting.formatMoney(numero, {
            symbol: '$',
            precision: 0,
            thousand: ',',
            format: {
                pos: '%s %v',
                zero: '%s  0',
            }
        });
        return NumeroF;
    }
    
    
}